import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppFocusService, AppFormService } from 'js-shared';

@Component({
  selector: 'app-app-form-template',
  templateUrl: './app-form-template.component.html'
})
export class AppFormTemplateComponent {

  public formTextValue : string = '';
  public formNumberValue : number | null = null;

  public errorMessageMap : {[key: string]: string} = {
    'required' : 'Error: Field is required.',
    'min' : 'Error: Field must be greater than or equal to 0',
    'max' : 'Error: Field must be less than or equal to 99'
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