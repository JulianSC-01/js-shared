import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent, AppFocusService, PageHeaderComponent } from 'ngx-js-shared';

@Component({
  imports: [
    AlertComponent,
    PageHeaderComponent,
    RouterLink
  ],
  selector: 'app-app-alert',
  standalone: true,
  templateUrl: './app-alert.component.html'
})
export class AppAlertComponent {
  constructor(
    private focusService : AppFocusService) { }

  focusDangerAlert() : void {
    this.focusService.focusElement('#dangerAlert');
  }
}