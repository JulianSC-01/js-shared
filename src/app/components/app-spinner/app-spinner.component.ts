import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'js-shared';

@Component({
  imports: [
    RouterLink,
    SharedModule
  ],
  selector: 'app-app-spinner',
  standalone: true,
  templateUrl: './app-spinner.component.html'
})
export class AppSpinnerComponent {
  constructor() { }
}