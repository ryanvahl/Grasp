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
  // tableCount: number = 0;

  ngOnInit(): void {
    this.exercises = this.exerciseService.getExercises();
  }

  programForm: FormGroup = new FormGroup({});

  onSubmit() {
    if(this.programForm.valid) {
    console.log("program submitted!");
    
    const elements = document.querySelectorAll("#exercise-list");
    console.log(elements[0]);

    const select = elements[0].getElementsByTagName("select");
    console.log(select);

    elements.forEach((element) => {
      console.log(element);
    });
    }
  }

  // used to create html section dynamically. Need to define array as number since pushing numbers
  numberOfExercises: number[] = [];

  addExercise() {
    this.numberOfExercises.push(1);
  }

  addSet(e: Event) {    
    let htmlElment = e.target as HTMLElement;
    
    // attach to existing reps and set element and not the button
    let htmlElmentSibling = htmlElment.nextElementSibling;
    console.log(htmlElmentSibling);
    let lastTableRow = htmlElmentSibling?.lastChild;
    console.log(lastTableRow);

    // table data
    let tableDataSet= document.createElement('td');
    tableDataSet.textContent = "3";

    let tableDataInputAndLabel = document.createElement('td');
    
    let label = document.createElement('label');
    label.textContent = "Reps";
    tableDataInputAndLabel.appendChild(label);

    let input = document.createElement('input');
    input.type = "number";
    tableDataInputAndLabel.appendChild(input);

    let tableDataButton = document.createElement('td');
    let button = document.createElement('button');
    button.type = "button";
    button.textContent = "X";
    tableDataButton.appendChild(button);
    button.addEventListener("click", this.deleteSet);
    
    let nextRow = document.createElement('tr');
    nextRow.appendChild(tableDataSet);
    nextRow.appendChild(tableDataInputAndLabel);
    nextRow.appendChild(tableDataButton);

    htmlElmentSibling?.insertAdjacentElement('beforeend', nextRow);
    }

    deleteSet(e: Event) {
      console.log("clicked");  
      let button = e.target as HTMLElement;
      let row = button.closest('tr');
      if(row) {
        row.remove();
      }
    }
}
