import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from 'ngx-js-shared';

@Component({
  imports: [
    PageHeaderComponent,
    RouterLink
  ],
  selector: 'app-app-page-header',
  standalone: true,
  templateUrl: './app-page-header.component.html'
})
export class AppPageHeaderComponent {
  constructor() { }
}