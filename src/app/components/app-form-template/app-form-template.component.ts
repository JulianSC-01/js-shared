import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FormA11yDirective, FormErrorHeaderComponent, FormInputNumberComponent,
  FormInputSelectComponent, FormInputTextComponent, PageHeaderComponent
} from 'ngx-js-shared';

@Component({
  imports: [
    FormA11yDirective,
    FormErrorHeaderComponent,
    FormInputNumberComponent,
    FormInputSelectComponent,
    FormInputTextComponent,
    PageHeaderComponent,
    FormsModule,
    RouterLink,
    RouterOutlet
  ],
  selector: 'app-form-template',
  standalone: true,
  templateUrl: './app-form-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormTemplateComponent {
  public formTextValue =
    signal('');
  public formNumberValue =
    signal<number | null>(null);
  public formSelectValue =
    signal('');

  public formSelectElements =
    signal(['01', '02', '03']);

  public errorMessageMap =
    signal<Record<string, string>>({
      'required' : 'Error: Field is required.',
      'min' : 'Error: Field must be greater than or equal to 0',
      'max' : 'Error: Field must be less than or equal to 99'
  });

  submit(ngForm : NgForm) : void {
    if (ngForm.valid) {
      alert("Form submitted successfully!");
    }
  }
}