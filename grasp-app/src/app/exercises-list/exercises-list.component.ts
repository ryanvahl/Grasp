import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercises-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.css'
})
export class ExercisesListComponent implements OnInit{

  // bind to in components html
  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService ){}

  ngOnInit(): void {
    this.exercises = this.exerciseService.getExercises();
  }

  deleteExercise(id: string) {
    this.exerciseService.deleteExercise(id);
  }
}
