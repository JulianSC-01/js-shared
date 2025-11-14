import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from 'ngx-js-shared';

@Component({
  imports: [
    PageHeaderComponent,
    RouterLink
  ],
  selector: 'app-app-page-footer',
  standalone: true,
  templateUrl: './app-page-footer.component.html'
})
export class AppPageFooterComponent {
  constructor() { }
}