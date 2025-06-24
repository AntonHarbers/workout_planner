
import { v4 as uuidv4 } from 'uuid'

export const dummyData: Array<WorkoutType> = [
    {
        id: uuidv4(),
        name: "Arms",
        days: [false, true, false, true, false, false, false]
    },
    {
        id: uuidv4(),
        name: "Legs",
        days: [true, false, false, false, true, false, false]
    },
    {
        id: uuidv4(),
        name: "Chest",
        days: [false, false, false, false, false, true, true]
    }
]

export const tableHeaders = ["Workout", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Delete"]
