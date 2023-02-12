import { Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, Validators } from '@angular/forms';
import { AppFormService } from '../../services/app-form.service';

@Component({
  selector: 'app-form-input-number',
  templateUrl: './form-input-number.component.html'
})
export class FormInputNumberComponent implements ControlValueAccessor, OnInit {

  @Input() inputErrorMessageId? : string;
  @Input() inputErrorMessages? : {[key: string]: string};
  @Input() inputId? : string;
  @Input() inputLabelInvisible? : boolean = false;
  @Input() inputLabelText? : string;
  @Input() inputMin? : number;
  @Input() inputMax? : number;
  @Input() inputReadOnly? : true;
  @Input() inputRequired? : boolean = false;
  @Input() inputStep? : number = 1;

  public controlDisabled? : boolean;
  public formControl! : AbstractControl;

  @ViewChild('input') input? : ElementRef;

  constructor(
    private formService : AppFormService,
    @Optional() @Self() private ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    const ngControl = this.ngControl;
    if (ngControl && ngControl.control) {
      this.formControl = ngControl.control;

      if (this.inputMin !== undefined) {
        this.formControl.addValidators(
          Validators.min(this.inputMin));
        this.formControl.updateValueAndValidity();
      }

      if (this.inputMax !== undefined) {
        this.formControl.addValidators(
          Validators.max(this.inputMax));
        this.formControl.updateValueAndValidity();
      }
    }
  }

  // --

  _onChange: any = () => {}
  _onTouched: any = () => {}

  registerOnChange(fn: (val: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.controlDisabled = isDisabled;
  }

  writeValue(obj : any) : void {
    if (this.input) {
      this.input.nativeElement.value = obj;
    }
  }

  // --

  controlHasChanged(event : Event) {
    const newValue =
      (<HTMLInputElement>event.target).valueAsNumber;

    if (isNaN(newValue)) {
      this._onChange(null);
    } else {
      this._onChange(newValue);
    }
  }

  controlIsInvalid() : boolean {
    return this.formService.isInvalid(this.formControl);
  }
}