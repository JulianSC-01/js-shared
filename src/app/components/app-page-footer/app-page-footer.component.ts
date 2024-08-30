import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'js-shared';

@Component({
  imports: [
    RouterLink,
    SharedModule
  ],
  selector: 'app-app-page-footer',
  standalone: true,
  templateUrl: './app-page-footer.component.html'
})
export class AppPageFooterComponent {
  constructor() { }
}