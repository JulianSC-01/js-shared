import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormInputNumberComponent, FormInputSelectComponent, LeadingZeroPipe, PageHeaderComponent } from 'ngx-js-shared';

@Component({
  imports: [
    FormInputNumberComponent,
    FormInputSelectComponent,
    FormsModule,
    LeadingZeroPipe,
    PageHeaderComponent,
    RouterLink
  ],
  selector: 'app-app-leading-zero',
  templateUrl: './app-leading-zero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLeadingZeroComponent {
  inputNumber =
    signal(0);
  inputDesiredLength =
    signal(2);

  desiredLengths =
    signal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}