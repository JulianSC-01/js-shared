import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  AppFocusService, AppFormService, FormErrorHeaderComponent,
  FormInputNumberComponent, FormInputSelectComponent, FormInputTextComponent, PageHeaderComponent
} from 'js-shared';

interface ExampleForm {
  formControlText: FormControl<string>;
  formControlNumber: FormControl<number | null>;
  formControlSelect: FormControl<string>;
  formGroup: FormGroup<ExampleSubForm>;
  formArray: FormArray<FormControl<string>>;
}

interface ExampleSubForm {
  formGroupText: FormControl<string>;
}

@Component({
  imports: [
    CommonModule,
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
  templateUrl: './app-form-reactive.component.html'
})
export class AppFormReactiveComponent {
  public exampleForm : FormGroup<ExampleForm>;

  public formSelectElements : string[] = ['01', '02', '03'];

  public errorMessageMap : {[key: string]: string} = {
    'required' : 'Error: Field is required.',
    'min' : 'Error: Field must be greater than or equal to 0',
    'max' : 'Error: Field must be less than or equal to 99'
  };

  constructor(
    private focusService : AppFocusService,
    private formBuilder : FormBuilder,
    public formService : AppFormService) {

    this.exampleForm = this.formBuilder.group<ExampleForm>({
      formControlText : this.formBuilder.control('', {
        nonNullable: true,
        validators: Validators.required
      }),
      formControlNumber : this.formBuilder.control(null, {
        validators: Validators.required
      }),
      formControlSelect : this.formBuilder.control('', {
        nonNullable: true,
        validators: Validators.required
      }),
      formGroup: this.formBuilder.group<ExampleSubForm>({
        formGroupText : this.formBuilder.control('', {
          nonNullable: true,
          validators: Validators.required
        })
      }),
      formArray: this.formBuilder.array<
        FormControl<string>>([])
    });
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
    if (this.exampleForm.invalid) {
      this.formService.revealAllErrors(this.exampleForm);
      this.focusService.focusErrorHeader();
    } else {
      alert("Form submitted successfully!");
    }
  }

  get formGroup() : FormGroup<ExampleSubForm> {
    return this.exampleForm.controls.formGroup;
  }

  get formArray() : FormArray<FormControl<string>> {
    return this.exampleForm.controls.formArray;
  }
}