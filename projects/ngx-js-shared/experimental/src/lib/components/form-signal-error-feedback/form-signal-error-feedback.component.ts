import { Component, computed, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-form-signal-error-feedback',
  templateUrl: './form-signal-error-feedback.component.html'
})
export class FormSignalErrorFeedbackComponent<T> {
  readonly errorFormField =
    input.required<FieldTree<T>>();
  readonly errorFeedbackId =
    input<string>();

  readonly fieldInvalid =
    computed(() =>
      this.errorFormField()().invalid() &&
      this.errorFormField()().touched());
}
