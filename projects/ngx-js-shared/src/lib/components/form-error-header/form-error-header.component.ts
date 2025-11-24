import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FocusService } from '../../services/focus.service';
import { FormHelper } from '../../util/form.helper';
import { AlertComponent } from '../alert/alert.component';

@Component({
  imports: [
    AlertComponent
  ],
  selector: 'app-form-error-header',
  standalone: true,
  templateUrl: './form-error-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorHeaderComponent {
  private readonly focusService =
    inject(FocusService);

  readonly errorFormGroup =
    input<FormGroup<any>>();
  readonly errorMessage =
    input<string>();

  readonly errorCountMessage =
    signal<string>('');

  clearErrors() {
    this.errorCountMessage.set('');
  }

  countErrors() {
    const formGroup =
      this.errorFormGroup();

    if (formGroup) {
      this.errorCountMessage.set(
        FormHelper.getErrorCountMessage(formGroup));

      if (this.errorCountMessage()) {
        this.focusService.focusErrorHeader();
      }
    }
  }
}