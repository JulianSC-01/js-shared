import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-sub-input-number',
  standalone: true,
  templateUrl: './app-form-input-number.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormInputNumberComponent {
}