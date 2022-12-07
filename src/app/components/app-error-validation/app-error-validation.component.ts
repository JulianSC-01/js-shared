import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppFocusService } from 'js-shared';
import { AppFormService } from 'projects/js-shared/src/public-api';

interface ExampleForm {
  formValueOne: FormControl<string>;
  subFormOne: FormGroup<ExampleSubForm>;
  formArrayOne: FormArray<FormControl<string>>;
  customMessage: FormControl<string>;
}

interface ExampleSubForm {
  subFormValueOne: FormControl<string>;
  subFormValueTwo: FormControl<string>;
}

@Component({
  selector: 'app-error-validation',
  templateUrl: './app-error-validation.component.html'
})
export class AppErrorValidationComponent {

  public exampleForm : FormGroup<ExampleForm>;

  public errorMessageMap : {[key: string]: string} = {
    'required' : 'Error: Field is required.'
  };

  constructor(
    private focusService : AppFocusService,
    private formBuilder : FormBuilder,
    public formService : AppFormService,) { 

    this.exampleForm = this.formBuilder.group<ExampleForm>({
      formValueOne : this.formBuilder.control('', {
        nonNullable: true,
        validators: Validators.required
      }),
      subFormOne: this.formBuilder.group<ExampleSubForm>({
        subFormValueOne : this.formBuilder.control('', {
          nonNullable: true,
          validators: Validators.required
        }),
        subFormValueTwo : this.formBuilder.control('', {
          nonNullable: true,
          validators: Validators.required
        }),
      }),
      formArrayOne: this.formBuilder.array<
        FormControl<string>>([]),
      customMessage : this.formBuilder.control('', {
        nonNullable: true
      }),
    });
  }

  addArrayElement() : void {
    const formArrayElement = 
      new FormControl('', {
        nonNullable: true, 
        validators: Validators.required
    });
    this.formArrayOne.push(formArrayElement);
    this.focusService.focusElement(
      '#formArrayOne' + (this.formArrayOne.length - 1))
  }

  removeArrayElement(index : number) : void {
    this.formArrayOne.removeAt(index);
    this.focusService.focusElement('#addButton');
  }
  
  submit() : void {
    if (this.exampleForm.invalid) {
      this.formService.markAllAsDirty(this.exampleForm);
      this.focusService.focusErrorHeader();
    }
  }

  get subFormOne() : FormGroup<ExampleSubForm> {
    return this.exampleForm.controls.subFormOne;
  }

  get formArrayOne() : FormArray<FormControl<string>> {
    return this.exampleForm.controls.formArrayOne;
  }
}