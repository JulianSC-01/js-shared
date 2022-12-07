import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { AppFormService } from '../../services/app-form.service';

@Component({
  selector: 'app-form-error-feedback',
  templateUrl: './form-error-feedback.component.html'
})
export class FormErrorFeedbackComponent {

  @Input() errorFeedbackControl! : FormControl<any>;
  @Input() errorFeedbackId? : string = '';
  @Input() errorFeedbackMessages? : {[key: string]: string} = {};
  
  constructor(
    public formService : AppFormService) { 
  }
}