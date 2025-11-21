import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-sub-label',
  standalone: true,
  templateUrl: './app-form-label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormLabelComponent {
}