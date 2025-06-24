import { useEffect, useMemo, useState } from 'react'
import { getDataFromLS } from './lib/localStorage'
import NewWorkoutForm from './components/NewWorkoutForm'
import WorkoutTable from './components/WorkoutTable'
import { containerStyle, emptyDataTextStyle, headerStyle, todaysWorkoutContainerStyle } from './lib/styles'

function App() {
  const [workoutData, setWorkoutData] = useState(getDataFromLS())
  useEffect(() => localStorage.setItem('workout-plan-data', JSON.stringify(workoutData)), [workoutData])

  const todaysWorkouts: Array<string> = useMemo(() => {
    const idx = new Date().getDay()
    const names: Array<string> = []
    workoutData.forEach(workout => {
      if (workout.days[idx]) names.push(workout.name)
    })
    return names
  }, [workoutData])

  return (
    <div className={containerStyle}>
      <h1 className={headerStyle}>Workout Planner</h1>

      <div className={todaysWorkoutContainerStyle}>
        <div className='font-bold'>Todays Workout:</div>
        {todaysWorkouts.map(item => <div>{item}</div>)}
      </div>

      <NewWorkoutForm
        setWorkoutData={setWorkoutData}
      />
      {workoutData.length
        ?
        <WorkoutTable
          workoutData={workoutData}
          setWorkoutData={setWorkoutData}
        />
        :
        <div className={emptyDataTextStyle}>Add a workout to get started!</div>
      }
    </div>
  )
}

export default App