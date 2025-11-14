import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent, PageHeaderComponent } from 'ngx-js-shared';

@Component({
  imports: [
    AlertComponent,
    PageHeaderComponent,
    RouterLink
  ],
  selector: 'app-app-home',
  standalone: true,
  templateUrl: './app-home.component.html'
})
export class AppHomeComponent {
  constructor() { }
}