import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppFocusService, AppFormService, SharedModule } from 'js-shared';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    SharedModule
  ],
  selector: 'app-app-form-template',
  standalone: true,
  templateUrl: './app-form-template.component.html'
})
export class AppFormTemplateComponent {

  public formTextValue : string = '';
  public formNumberValue : number | null = null;
  public formSelectValue : string = '';

  public formSelectElements : string[] = ['01', '02', '03'];

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