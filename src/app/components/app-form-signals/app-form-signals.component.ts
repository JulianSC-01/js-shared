import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { applyEach, form, FormField, FormRoot, max, min, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { AlertComponent, FocusService, FormLabelComponent, PageHeaderComponent } from 'ngx-js-shared';

const REQ_ERROR = 'Error: Field is required.';
const MIN_ERROR = 'Error: Field must be greater than or equal to 0';
const MAX_ERROR = 'Error: Field must be less than or equal to 99';

interface SignalForm {
  formControlText: string;
  formControlNumber: number | null;
  formControlSelect: string;
  formArray: string[];
}

@Component({
  imports: [
    AlertComponent,
    FormField,
    FormRoot,
    FormLabelComponent,
    PageHeaderComponent,
    RouterLink
  ],
  selector: 'app-form-signals',
  templateUrl: './app-form-signals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormSignalsComponent {
  private readonly focusService =
    inject(FocusService);

  private readonly signalFormModel =
    this.createSignalFormModel();
  public readonly signalForm =
    this.createSignalForm();

  private readonly formErrorCount =
    computed(() => {
      let errorCount = 0;

      this.signalForm().
        errorSummary().forEach(error => {
          if (error.fieldTree().touched()) {
            errorCount++;
          }
      });

      return errorCount;
    });

  public readonly formErrorMessage =
    computed(() => {
      if (this.formErrorCount() === 1) {
        return 'Please correct the error on this page.';
      } else if (this.formErrorCount() > 1) {
        return `Please correct the ${this.formErrorCount()} errors on this page.`;
      } else {
        return '';
      }
    });

  public readonly formInvalid =
    computed(() => this.formErrorCount() > 0);

  public readonly formSelectElements =
    signal(['01', '02', '03']);

  private createSignalFormModel() {
    return signal<SignalForm>({
      formControlText: '',
      formControlNumber: null,
      formControlSelect: '',
      formArray: []
    });
  }

  private createSignalForm() {
    return form(
      this.signalFormModel,
      (formSchema) => {
        required(formSchema.formControlText,
          { message: REQ_ERROR });
        required(formSchema.formControlNumber,
          { message: REQ_ERROR });
        min(formSchema.formControlNumber, 0,
          { message: MIN_ERROR });
        max(formSchema.formControlNumber, 99,
          { message: MAX_ERROR });
        required(formSchema.formControlSelect,
          { message: REQ_ERROR });
        applyEach(formSchema.formArray, (item) => {
          required(item, { message: REQ_ERROR });
        })
      }, {
        submission: {
          action: async (form) => {
            form().reset();
            alert('Form submitted successfully!');
          },
          onInvalid: () => {
            this.focusService.focusErrorHeader();
          }
        }
      }
    );
  }

  public addArrayElement() {
    this.signalFormModel.update(
      formModel => ({
        ...formModel,
        formArray:
          [...formModel.formArray, '']
      })
    );

    this.focusService.focusElement(
      `#formArrayText${this.signalForm.formArray.length - 1}`);
  }

  public removeArrayElement(index: number) {
    this.signalFormModel.update(
      formModel => ({
        ...formModel,
        formArray:
          formModel.formArray.filter(
            (_, i) => i !== index)
      })
    );

    this.focusService.focusElement('#addButton');
  }
}