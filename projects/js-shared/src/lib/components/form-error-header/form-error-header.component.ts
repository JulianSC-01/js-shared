import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AppFormService } from '../../services/app-form.service';

@Component({
  selector: 'app-form-error-header',
  templateUrl: './form-error-header.component.html'
})
export class FormErrorHeaderComponent {

  @Input() errorHeaderFormGroup! : FormGroup<any>;
  @Input() errorHeaderMessage? : string;

  constructor(
    private formService : AppFormService) {   
  }

  getErrorCount(
    form : FormGroup<any> | FormArray<any>) : number {
    let count : number = 0;
    
    if (form) {
      for (const field in form.controls) {
        let control = form.get(field);
        if (control instanceof FormGroup || 
            control instanceof FormArray) {
          count += this.getErrorCount(control);
        } else if (control instanceof FormControl) {
          if (this.formService.isInvalid(control))
            count++;
        }
      }
    }
    
    return count;
  }
  
  getErrorCountHeaderMessage() : string | null {
    let count : number = 
      this.getErrorCount(this.errorHeaderFormGroup);
    
    if (count == 1)
      return "Please correct the error on this page.";
    if (count > 1)
      return "Please correct the " + count + " errors on this page.";
    
    return null;
  }
}