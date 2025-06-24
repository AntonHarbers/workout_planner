import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { formButtonStyle, formContainerStyle, formInputStyle } from "../lib/styles"

export default function NewWorkoutForm({ setWorkoutData }: { setWorkoutData: React.Dispatch<React.SetStateAction<WorkoutType[]>> }) {
    const [newWorkoutNameInput, setNewWorkOutNameInput] = useState("")

    const addNewWorkout = () => {
        if (newWorkoutNameInput === "") return
        setWorkoutData(oldData => [...oldData, { id: uuidv4(), name: newWorkoutNameInput, days: Array(7).fill(false) }])
        setNewWorkOutNameInput("")
    }
    return (
        <form className={formContainerStyle} onSubmit={addNewWorkout}>
            <input
                className={formInputStyle}
                type="text"
                placeholder='Workout Name'
                value={newWorkoutNameInput}
                onChange={(e) => setNewWorkOutNameInput(e.target.value)}
            />
            <button
                type='button'
                onClick={addNewWorkout}
                className={formButtonStyle}>
                New Workout
            </button>
        </form>)
}
