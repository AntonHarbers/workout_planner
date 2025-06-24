import { useEffect, useState } from 'react'
import { getDataFromLS } from './lib/localStorage'
import NewWorkoutForm from './components/NewWorkoutForm'
import WorkoutTable from './components/WorkoutTable'
import { containerStyle, emptyDataTextStyle, headerStyle } from './lib/styles'

function App() {
  const [workoutData, setWorkoutData] = useState(getDataFromLS())
  useEffect(() => localStorage.setItem('workout-plan-data', JSON.stringify(workoutData)), [workoutData])

  return (
    <div className={containerStyle}>
      <h1 className={headerStyle}>Workout Planner</h1>
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