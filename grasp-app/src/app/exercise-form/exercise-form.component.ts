import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css'
})
export class ExerciseFormComponent implements OnInit{
  
  constructor(private formBuilder: FormBuilder, private exerciseService: ExerciseService, private router: Router){}

  ngOnInit(): void {
    this.exerciseForm = this.formBuilder.group({
      name: ['', Validators.required],
      equipment: ['', Validators.required],
      primaryMuscleWorked: ['', Validators.required],
      imageExercise: ['', Validators.required]
    });
  }
  exerciseForm: FormGroup = new FormGroup({});

  onSubmit() {
    if(this.exerciseForm.valid) {
      let exercise: Exercise = this.exerciseForm.value;
      this.exerciseService.addExercise(exercise);

      // go to list of exercises
      this.router.navigate(['/exercises']);
    }
  }
}