import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'js-shared';

@Component({
  imports: [
    RouterLink,
    SharedModule
  ],
  selector: 'app-app-page-header',
  standalone: true,
  templateUrl: './app-page-header.component.html'
})
export class AppPageHeaderComponent {
  constructor() { }
}