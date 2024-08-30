import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppFocusService, SharedModule } from 'js-shared';

@Component({
  imports: [
    RouterLink,
    SharedModule
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