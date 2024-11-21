import { Exercise } from "./exercise"

export interface ProgramExercise {
    id: string,
    name: string,
    exercise: Exercise,
    sets: number,
    reps: number,
    restTime: number
}