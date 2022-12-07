import { Component } from '@angular/core';
import { AppFocusService } from 'js-shared';

@Component({
  selector: 'app-app-alert',
  templateUrl: './app-alert.component.html'
})
export class AppAlertComponent {

  constructor(
    private focusService : AppFocusService) { }

  focusDangerAlert() : void {
    this.focusService.focusElement('#dangerAlert');
  }
}