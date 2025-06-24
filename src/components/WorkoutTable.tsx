import { tableHeaders } from "../lib/data"
import { tableContainerStyle } from "../lib/styles"
import WorkoutRow from "./WorkoutRow"

export default function WorkoutTable({ workoutData, setWorkoutData }:
    { workoutData: WorkoutType[], setWorkoutData: React.Dispatch<React.SetStateAction<WorkoutType[]>> }
) {
    const updateWorkoutDay = (id: string, dayId: number) => {
        setWorkoutData(oldState => {
            return oldState.map(old => old.id === id ? { ...old, days: old.days.map((day, idx) => idx === dayId ? !day : day) } : old)
        })
    }

    const deleteWorkout = (id: string) => setWorkoutData(oldState => oldState.filter(old => old.id != id))

    return (
        <>
            <div className={tableContainerStyle}>
                {tableHeaders.map(header => <div key={header}>{header}</div>)}
            </div>
            {workoutData.map(workout => {
                return <WorkoutRow key={workout.id} workout={workout} updateWorkoutDay={updateWorkoutDay} deleteWorkout={deleteWorkout} />
            })}
        </>
    )
}
