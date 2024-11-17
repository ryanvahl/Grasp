import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ProgramListComponent } from './program-list/program-list.component';

export const routes: Routes = [
    // no path provided
    {path:"", component: TodoComponent},
    {path:"exercises", component: ExercisesListComponent},
    {path: "programs", component: ProgramListComponent}
];
