import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProgramService } from '../services/program.service';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise';
import { Program } from '../models/program';
import { ProgramExercise } from '../models/programExercise';

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
  program: Program = {} as Program;
  
  ngOnInit(): void {
    this.exercises = this.exerciseService.getExercises();
  }

  programForm: FormGroup = new FormGroup({});

  onSubmit() {
    let programName = document.getElementById("program-name") as HTMLInputElement;
    this.program.name = programName.value;
    this.program.exercises = [];
    this.program.id = Date.now().toString();
    this.program.dateCreated = new Date();
    
    if(this.programForm.valid) {
    console.log("program submitted!");
    
    const elements = document.querySelectorAll("#exercise-list");    

    let repArr: number[] = [];
    let repArrTotal = [];

    elements[0].childNodes.forEach((el) => {

      let programExercise: ProgramExercise = {} as ProgramExercise;
      

      if(el.firstChild?.nextSibling?.nodeName === "SELECT") {
        const selected = el.firstChild?.nextSibling as HTMLSelectElement;
        console.log(selected.value);
        programExercise.exercise = selected.value;
        repArrTotal.push(selected.value);
      }

      if(el && el.nodeName === "DIV") {
        if(el.lastChild?.nodeName === "TABLE") {
          // console.log(el.lastChild);
          const table = el.lastChild as HTMLTableElement;

          // TABLE LOOP. Collects all rows for one selected exercise
          table.childNodes.forEach((tblEl) => {
            if(tblEl.nodeName === "TR") {
              // console.log(tblEl.nodeName);
              if(tblEl.childNodes) {
                tblEl.childNodes.forEach((trEl) => {
                  // console.log(trEl.firstChild?.nodeName);
                  if(trEl.firstChild?.nodeName === "INPUT") {
                    const input = trEl.firstChild as HTMLInputElement;
                    console.log(input.value);
                    repArr.push(Number(input.value));
                  }
                });
              }
            }

          });
          console.log(repArr);

        }

        console.log(programExercise);
        // add reps for current exercise
        programExercise.reps = repArr;
        

        this.program.exercises.push(programExercise);

        // clear reps
        repArr = [];
      }      
    });

      console.log(this.program);
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
