import { rowContainerStyle, rowDeleteButtonStyle, rowDeleteContainerStyle, rowNameStyle } from "../lib/styles"

export default function WorkoutRow({ workout, updateWorkoutDay, deleteWorkout }:
    { workout: WorkoutType, updateWorkoutDay: (id: string, dayId: number) => void, deleteWorkout: (id: string) => void }) {
    return (
        <div className={rowContainerStyle}>
            <div className={rowNameStyle}>
                {workout.name}
            </div>
            {workout.days.map((day, idx) => {
                return (
                    <div key={idx} className={rowNameStyle}>
                        <input
                            className='w-full'
                            type='checkbox'
                            checked={day}
                            onChange={() => updateWorkoutDay(workout.id, idx)} />
                    </div>
                )
            })}
            <div className={rowDeleteContainerStyle}>
                <button className={rowDeleteButtonStyle} onClick={() => deleteWorkout(workout.id)}>🚮</button>
            </div>
        </div>)
}
