import { ChangeDetectionStrategy, Component, input, numberAttribute } from '@angular/core';
import { FormErrorFeedbackComponent } from '../form-error-feedback/form-error-feedback.component';
import { FormInputBaseDirective } from '../form-input-base/form-input-base.directive';
import { FormLabelComponent } from '../form-label/form-label.component';

@Component({
  imports: [
    FormErrorFeedbackComponent,
    FormLabelComponent
  ],
  selector: 'app-form-input-number',
  templateUrl: './form-input-number.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputNumberComponent
  extends FormInputBaseDirective {
  readonly inputMin =
    input(undefined,
      { transform: numberAttribute });
  readonly inputMax =
    input(undefined,
      { transform: numberAttribute });
  readonly inputStep =
    input(1,
      { transform: numberAttribute });

  controlHasChanged(event: Event) {
    const newValue =
      (<HTMLInputElement>event.target).
        valueAsNumber;

    if (isNaN(newValue)) {
      this._onChange(null);
    } else {
      this._onChange(newValue);
    }
  }
}