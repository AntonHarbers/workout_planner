import { dummyData } from "./data"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidWorkout = (obj: any): obj is WorkoutType => {
    return (
        typeof obj === 'object' && typeof obj.id === "string" && typeof obj.name === "string" &&
        Array.isArray(obj.days) && obj.days.every((day: unknown) => typeof day === 'boolean')
    )
}

export const getDataFromLS = (): WorkoutType[] => {
    const lsData = localStorage.getItem('workout-plan-data')
    if (!lsData) return dummyData
    try {
        const parsed = JSON.parse(lsData)
        if (Array.isArray(parsed) && parsed.every(isValidWorkout)) return parsed
        else return dummyData
    } catch (error) {
        console.error("Invalid LS data", error)
        return dummyData
    }
}