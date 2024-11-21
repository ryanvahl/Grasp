import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProgramService } from '../services/program.service';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise';

@Component({
  selector: 'app-program-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatSelectModule],
  templateUrl: './program-form.component.html',
  styleUrl: './program-form.component.css'
})
export class ProgramFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private programService: ProgramService, private exerciseService: ExerciseService){}
  
  exercises: Exercise[] = [];
  
  ngOnInit(): void {
    this.exercises = this.exerciseService.getExercises();
  }

  programForm: FormGroup = new FormGroup({});



  onSubmit() {
    if(this.programForm.valid) {
    console.log("program submitted!");
    }
  }

  // need to define array as number since pushing numbers
  numberOfExercises: number[] = [];

  addExercise() {
    this.numberOfExercises.push(1);
  }
}