import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent, FocusService, PageHeaderComponent } from 'ngx-js-shared';

@Component({
  imports: [
    AlertComponent,
    PageHeaderComponent,
    RouterLink
  ],
  selector: 'app-app-alert',
  standalone: true,
  templateUrl: './app-alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAlertComponent {
  readonly focusService =
    inject(FocusService);

  focusDangerAlert() : void {
    this.focusService.focusElement('#dangerAlert');
  }
}