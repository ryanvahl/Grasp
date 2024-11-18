import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css'
})
export class ExerciseFormComponent implements OnInit{
  
  constructor(private formBuilder: FormBuilder){}

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
      console.log("valid");
    }
  }
}