import { ProgramExercise } from "./programExercise";

export interface Program {
    id: string,
    name: string,
    exercises: ProgramExercise[],
    dateCreated: Date,
    dateUpdated: Date
}
