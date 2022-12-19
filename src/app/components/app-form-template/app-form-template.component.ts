import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppFocusService, AppFormService } from 'js-shared';

@Component({
  selector: 'app-app-form-template',
  templateUrl: './app-form-template.component.html'
})
export class AppFormTemplateComponent {

  public formValue : string = '';

  public errorMessageMap : {[key: string]: string} = {
    'required' : 'Error: Field is required.'
  };

  constructor(
    private focusService : AppFocusService,
    private formService : AppFormService) {
  }

  submit(formGroup : FormGroup<any>) : void {
    if (formGroup.invalid) {
      this.formService.revealAllErrors(formGroup);
      this.focusService.focusErrorHeader();
    } else {
      alert("Form submitted successfully!");
    }
  }
}