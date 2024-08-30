import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'js-shared';

@Component({
  imports: [
    RouterLink,
    SharedModule
  ],
  selector: 'app-app-home',
  standalone: true,
  templateUrl: './app-home.component.html'
})
export class AppHomeComponent {
  constructor() { }
}