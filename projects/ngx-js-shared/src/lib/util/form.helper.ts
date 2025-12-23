import { DestroyRef } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {
  AbstractControl, FormArray, FormControl, FormGroup,
  PristineChangeEvent, StatusChangeEvent
} from "@angular/forms";
import { filter } from "rxjs";

export class FormHelper {
  private constructor() {}

  static getErrorCountMessage(
    formGroup : FormGroup<any>) {
    let count : number =
      this.getErrorCount(formGroup);

    if (count == 1)
      return "Please correct the error on this page.";
    if (count > 1)
      return "Please correct the " + count + " errors on this page.";

    return '';
  }

  static getErrorListener(
    formControl: AbstractControl,
    destroyRef: DestroyRef) {
    return formControl.events.pipe(
      filter(e =>
        e instanceof PristineChangeEvent ||
        e instanceof StatusChangeEvent),
      takeUntilDestroyed(destroyRef)
    );
  }

  static isInvalid(control : AbstractControl) {
    return (
      control &&
      control.enabled &&
      control.dirty &&
      control.invalid);
  }

  static revealAllErrors(
    form : FormGroup<any> | FormArray<any>) {
    if (form) {
      for (const field in form.controls) {
        let control = form.get(field);
        if (control instanceof FormGroup ||
            control instanceof FormArray) {
          this.revealAllErrors(control);
        } else if (control instanceof FormControl) {
          control.markAsDirty();
        }
      }
    }
  }

  private static getErrorCount(
    form? : FormGroup<any> | FormArray<any>) {
    let count = 0;

    if (form) {
      for (const field in form.controls) {
        let control = form.get(field);
        if (control instanceof FormGroup ||
            control instanceof FormArray) {
          count += this.getErrorCount(control);
        } else if (control instanceof FormControl) {
          if (FormHelper.isInvalid(control))
            count++;
        }
      }
    }

    return count;
  }
}