import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-sub-input-text',
  standalone: true,
  templateUrl: './app-form-input-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormInputTextComponent {
}