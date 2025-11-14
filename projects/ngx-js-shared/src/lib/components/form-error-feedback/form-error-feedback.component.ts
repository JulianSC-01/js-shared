import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppFormService } from '../../services/app-form.service';

@Component({
  imports: [
    CommonModule
  ],
  selector: 'app-form-error-feedback',
  standalone: true,
  templateUrl: './form-error-feedback.component.html'
})
export class FormErrorFeedbackComponent {
  @Input({ required: true }) errorFeedbackControl! : AbstractControl;
  @Input() errorFeedbackId? : string;
  @Input() errorFeedbackMessages : {[key: string]: string} = {};

  constructor(
    public formService : AppFormService) {
  }
}