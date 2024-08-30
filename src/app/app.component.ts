import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from 'js-shared';

@Component({
  imports: [
    RouterOutlet,
    SharedModule
  ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() { }
}