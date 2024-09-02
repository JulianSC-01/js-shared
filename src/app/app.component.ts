import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageFooterComponent } from 'js-shared';

@Component({
  imports: [
    PageFooterComponent,
    RouterOutlet
  ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() { }
}