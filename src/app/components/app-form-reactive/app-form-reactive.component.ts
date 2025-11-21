import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FocusService, FormA11yDirective, FormErrorHeaderComponent, FormInputNumberComponent,
  FormInputSelectComponent, FormInputTextComponent, PageHeaderComponent
} from 'ngx-js-shared';
import { createReactiveForm, ReactiveForm } from './app-form-reactive.util';

@Component({
  imports: [
    FormA11yDirective,
    FormErrorHeaderComponent,
    FormInputNumberComponent,
    FormInputSelectComponent,
    FormInputTextComponent,
    PageHeaderComponent,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet
  ],
  selector: 'app-form-reactive',
  standalone: true,
  templateUrl: './app-form-reactive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFormReactiveComponent {
  private readonly focusService =
    inject(FocusService);
  private readonly formBuilder =
    inject(FormBuilder);

  public reactiveForm :
    FormGroup<ReactiveForm>;

  public formSelectElements =
    signal(['01', '02', '03']);

  public errorMessageMap =
    signal<Record<string, string>>({
      'required' : 'Error: Field is required.',
      'min' : 'Error: Field must be greater than or equal to 0',
      'max' : 'Error: Field must be less than or equal to 99'
  });

  constructor() {
    this.reactiveForm =
      createReactiveForm(this.formBuilder);
  }

  addArrayElement() : void {
    const formArrayElement =
      new FormControl('', {
        nonNullable: true,
        validators: Validators.required
    });

    this.formArray.push(formArrayElement);

    this.focusService.focusElement(
      '#formArrayText' + (this.formArray.length - 1))
  }

  removeArrayElement(index : number) : void {
    this.formArray.removeAt(index);
    this.focusService.focusElement('#addButton');
  }

  submit() : void {
    if (this.reactiveForm.valid) {
      alert("Form submitted successfully!");
    }
  }

  get formArray() : FormArray<FormControl<string>> {
    return this.reactiveForm.controls.formArray;
  }
}