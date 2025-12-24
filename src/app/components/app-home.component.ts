import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent, PageHeaderComponent } from 'ngx-js-shared';

@Component({
  imports: [
    AlertComponent,
    PageHeaderComponent,
    RouterLink
  ],
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHomeComponent {
}