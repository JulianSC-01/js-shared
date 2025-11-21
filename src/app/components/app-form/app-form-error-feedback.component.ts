import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-sub-error-feedback',
  standalone: true,
  templateUrl: './app-form-error-feedback.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormErrorFeedbackComponent {
}