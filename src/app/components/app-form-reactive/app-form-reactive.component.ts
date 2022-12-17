import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppFocusService } from 'js-shared';
import { AppFormService } from 'projects/js-shared/src/public-api';

interface ExampleForm {
  formControlText: FormControl<string>;
  formGroup: FormGroup<ExampleSubForm>;
  formArray: FormArray<FormControl<string>>;
}
interface ExampleSubForm {
  formGroupText: FormControl<string>;
}

@Component({
  selector: 'app-form-reactive',
  templateUrl: './app-form-reactive.component.html'
})
export class AppFormReactiveComponent {

  public exampleForm : FormGroup<ExampleForm>;

  public errorMessageMap : {[key: string]: string} = {
    'required' : 'Error: Field is required.'
  };

  constructor(
    private focusService : AppFocusService,
    private formBuilder : FormBuilder,
    public formService : AppFormService,) {

    this.exampleForm = this.formBuilder.group<ExampleForm>({
      formControlText : this.formBuilder.control('', {
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
    }
  }

  get formGroup() : FormGroup<ExampleSubForm> {
    return this.exampleForm.controls.formGroup;
  }

  get formArray() : FormArray<FormControl<string>> {
    return this.exampleForm.controls.formArray;
  }
}