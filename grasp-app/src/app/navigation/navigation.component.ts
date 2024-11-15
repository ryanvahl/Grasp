import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatSidenavModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
