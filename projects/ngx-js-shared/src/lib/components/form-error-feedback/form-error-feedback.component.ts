import { KeyValuePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, PristineChangeEvent, StatusChangeEvent, ValidationErrors } from '@angular/forms';
import { filter } from 'rxjs';
import { FormHelper } from '../../util/form.helper';

@Component({
  imports: [
    KeyValuePipe
  ],
  selector: 'app-form-error-feedback',
  standalone: true,
  templateUrl: './form-error-feedback.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorFeedbackComponent
  implements OnInit {
  private readonly destroyRef =
    inject(DestroyRef);

  readonly errorFeedbackId =
    input<string>();
  readonly errorFeedbackMessages =
    input<Record<string, string>>({});
  readonly formControl =
    input.required<AbstractControl>();

  readonly formControlErrors =
    signal<ValidationErrors | null>({});
  readonly formControlIsInvalid =
    signal(false);

  ngOnInit(): void {
    this.addErrorListener();
  }

  private addErrorListener() {
    this.formControl().events.pipe(
      filter(e =>
        e instanceof PristineChangeEvent ||
        e instanceof StatusChangeEvent
      ),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.formControlErrors.set(
        this.formControl().errors);
      this.formControlIsInvalid.set(
        FormHelper.isInvalid(this.formControl()));
    });
  }
}