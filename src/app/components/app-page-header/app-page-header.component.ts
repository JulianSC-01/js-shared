import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from 'ngx-js-shared';

@Component({
  imports: [
    PageHeaderComponent,
    RouterLink
  ],
  selector: 'app-app-page-header',
  templateUrl: './app-page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPageHeaderComponent {
}