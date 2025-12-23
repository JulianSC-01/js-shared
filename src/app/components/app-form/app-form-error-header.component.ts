import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-sub-error-header',
  standalone: true,
  templateUrl: './app-form-error-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormErrorHeaderComponent {
}