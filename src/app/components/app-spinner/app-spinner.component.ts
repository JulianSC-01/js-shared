import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent, SpinnerComponent } from 'ngx-js-shared';

@Component({
  imports: [
    PageHeaderComponent,
    SpinnerComponent,
    RouterLink
  ],
  selector: 'app-app-spinner',
  standalone: true,
  templateUrl: './app-spinner.component.html'
})
export class AppSpinnerComponent {
  constructor() { }
}