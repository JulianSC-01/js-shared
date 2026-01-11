import { Directive, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { FormErrorHeaderComponent } from '../components/form-error-header/form-error-header.component';
import { FormHelper } from '../util/form.helper';

type FormType =
  FormGroupDirective | NgForm;

@Directive({
  selector: 'form[appFormA11y]'
})
export class FormA11yDirective {
  private readonly reactiveForm =
    inject(FormGroupDirective,
      { optional: true, self: true });
  private readonly templateForm =
    inject(NgForm,
      { optional: true, self: true });

  readonly formErrorHeader =
    input<FormErrorHeaderComponent>();

  constructor() {
    if (this.reactiveForm) {
      this.addSubmissionListener(
        this.reactiveForm);
    } else if (this.templateForm) {
      this.addSubmissionListener(
        this.templateForm);
    }
  }

  private addSubmissionListener(
    formInstance : FormType) {
    formInstance.ngSubmit.pipe(
      takeUntilDestroyed()
    ).subscribe(() => {
      const formErrorHeader =
        this.formErrorHeader();

      if (formInstance.invalid) {
        FormHelper.revealAllErrors(
          formInstance.form);
      }

      if (formErrorHeader) {
        if (formInstance.valid) {
          formErrorHeader.clearErrors();
        } else if (formInstance.invalid) {
          formErrorHeader.countErrors();
        }
      }
    });
  }
}