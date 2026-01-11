import { KeyValuePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormHelper } from '../../util/form.helper';

@Component({
  imports: [
    KeyValuePipe
  ],
  selector: 'app-form-error-feedback',
  templateUrl: './form-error-feedback.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorFeedbackComponent
  implements OnInit {
  private readonly destroyRef =
    inject(DestroyRef);

  readonly errorFeedbackControl =
    input.required<AbstractControl>();
  readonly errorFeedbackId =
    input<string>();
  readonly errorFeedbackMessages =
    input<Record<string, string>>({});

  readonly formControlErrors =
    signal<ValidationErrors | null>({});
  readonly formControlIsInvalid =
    signal(false);

  ngOnInit() {
    FormHelper.getErrorListener(
      this.errorFeedbackControl(),
      this.destroyRef).
      subscribe(event => {
        this.formControlErrors.set(
          event.source.errors);
        this.formControlIsInvalid.set(
          FormHelper.isInvalid(event.source));
      });
  }
}