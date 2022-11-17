import { Component } from '@angular/core';
import { FocusService } from 'js-shared';

@Component({
  selector: 'app-app-alert',
  templateUrl: './app-alert.component.html'
})
export class AppAlertComponent {

  constructor(
    private focusService : FocusService) { }

  focusDangerAlert() : void {
    this.focusService.focusElement('#dangerAlert');
  }
}