import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  styleUrl: './alert.component.css',
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  readonly alertId =
    input<string>();
  readonly alertRole =
    input('alert');
  readonly alertType =
    input('alert-info');

  alertClass =
    computed(() => `alert ${this.alertType()}`);
}