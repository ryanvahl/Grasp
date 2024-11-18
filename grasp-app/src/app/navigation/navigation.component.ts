import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExercisesListComponent } from '../exercises-list/exercises-list.component';
import { ProgramListComponent } from '../program-list/program-list.component';
import { ExerciseFormComponent } from '../exercise-form/exercise-form.component';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatSidenavModule, MatCheckboxModule, MatButtonModule, RouterModule, CommonModule, ExercisesListComponent, ProgramListComponent, MatListModule, TodoComponent, ExerciseFormComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{

  // store active route in address bar
  activeRoute = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
      console.log(this.activeRoute);
    });
  }

}
