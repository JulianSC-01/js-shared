import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppFormService {
  constructor() { }

  isInvalid(control : AbstractControl) {
    return (
      control && 
      control.enabled && 
      control.dirty && 
      control.invalid);
  }

  markAllAsDirty(
    form : FormGroup<any> | FormArray<any>) : void {
    if (form) {
      for (const field in form.controls) {
        let control = form.get(field);
        if (control instanceof FormGroup || 
            control instanceof FormArray) {
          this.markAllAsDirty(control);
        } else if (control instanceof FormControl) {
          control.markAsDirty();
        }
      }
    }
  }
}