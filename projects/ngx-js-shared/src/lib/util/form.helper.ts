import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormHelper {
  private constructor() {}

  static getErrorCountMessage(
    formGroup : FormGroup<any>) : string {
    let count : number =
      this.getErrorCount(formGroup);

    if (count == 1)
      return "Please correct the error on this page.";
    if (count > 1)
      return "Please correct the " + count + " errors on this page.";

    return '';
  }

  private static getErrorCount(
    form? : FormGroup<any> | FormArray<any>) : number {
    let count : number = 0;

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

  static isInvalid(control : AbstractControl) : boolean {
    return (
      control &&
      control.enabled &&
      control.dirty &&
      control.invalid);
  }

  static revealAllErrors(
    form : FormGroup<any> | FormArray<any>) : void {
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
}