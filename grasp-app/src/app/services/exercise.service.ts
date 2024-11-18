import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private exercises: Exercise[] = [];

  getExercises(id: string): Exercise[] {
    return this.exercises;
  }

  // returns a single Exercise model or undefined if id finds no match
  getExercise(id: string): Exercise | undefined {
    return this.exercises.find(res => res.id === id);
  }

  addExercise(exercise: Exercise): void {
    // provides an id generated by the system. Can use database primary key, _id for MongoDB later
    exercise.id = Date.now().toString();

    this.exercises.push(exercise);
  }

  updateExercise(updatedExercise: Exercise): void {
    let index = this.exercises.findIndex(res => res.id === updatedExercise.id);
  }
}
