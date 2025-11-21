import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent, SpinnerComponent } from 'ngx-js-shared';

@Component({
  imports: [
    PageHeaderComponent,
    SpinnerComponent,
    RouterLink
  ],
  selector: 'app-app-spinner',
  standalone: true,
  templateUrl: './app-spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSpinnerComponent {
}