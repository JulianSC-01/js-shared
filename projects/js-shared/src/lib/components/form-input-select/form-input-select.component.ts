import { Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { AppFormService } from '../../services/app-form.service';

const DEFAULT_EMPTY_OPTION_TEXT = 'Select';

@Component({
  selector: 'app-form-input-select',
  templateUrl: './form-input-select.component.html'
})
export class FormInputSelectComponent
  implements ControlValueAccessor, OnInit {

  @Input() inputEmptyOption? : boolean = true;
  @Input() inputEmptyOptionText? : string = DEFAULT_EMPTY_OPTION_TEXT;
  @Input() inputErrorMessageId? : string;
  @Input() inputErrorMessages? : {[key: string]: string};
  @Input() inputId? : string;
  @Input() inputLabelInvisible? : boolean = false;
  @Input() inputLabelText? : string;
  @Input() inputRequired? : boolean = false;

  public controlDisabled? : boolean;
  public formControl! : AbstractControl;

  @ViewChild('input', {
    static: true, read: ElementRef }) input? : ElementRef;

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
      (<HTMLInputElement>event.target).value;
    this._onChange(newValue);
  }

  controlIsInvalid() : boolean {
    return this.formService.isInvalid(this.formControl);
  }
}