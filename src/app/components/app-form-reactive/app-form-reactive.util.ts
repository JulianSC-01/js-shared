import { FormArray, FormBuilder, FormControl, Validators } from "@angular/forms";

export interface ReactiveForm {
  formControlText: FormControl<string>;
  formControlNumber: FormControl<number | null>;
  formControlSelect: FormControl<string>;
  formArray: FormArray<FormControl<string>>;
}

export function createReactiveForm(
  formBuilder: FormBuilder) {
  return formBuilder.
    group<ReactiveForm>({
    formControlText:
      formBuilder.control('', {
        nonNullable: true,
        validators: Validators.required
      }),
    formControlNumber:
      formBuilder.control(null, {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.max(99)
        ]
      }),
    formControlSelect:
      formBuilder.control('', {
        nonNullable: true,
        validators: Validators.required
      }),
    formArray:
      formBuilder.array<
        FormControl<string>>([])
    });
}