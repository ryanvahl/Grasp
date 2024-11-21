import { ProgramExercise } from "./program-exercise";

export interface Program {
    name: string,
    exercises: ProgramExercise[],
    dateCreated: Date,
    dateUpdated: Date
}
