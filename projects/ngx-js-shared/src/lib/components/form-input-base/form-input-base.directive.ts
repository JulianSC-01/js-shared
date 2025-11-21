import { booleanAttribute, DestroyRef, Directive, ElementRef, inject, input, OnInit, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl, PristineChangeEvent, StatusChangeEvent } from '@angular/forms';
import { filter } from 'rxjs';
import { FormHelper } from '../../util/form.helper';

@Directive({
  standalone: true
})
export abstract class FormInputBaseDirective
  implements ControlValueAccessor, OnInit {
  private readonly destroyRef =
    inject(DestroyRef);
  private readonly ngControl =
    inject(NgControl,
      { self: true });

  readonly inputErrorMessageId =
    input<string>();
  readonly inputErrorMessages =
    input<Record<string, string>>({});
  readonly inputId =
    input<string>();
  readonly inputLabelInvisible =
    input(false,
      { transform: booleanAttribute });
  readonly inputLabelText =
    input<string>();
  readonly inputReadOnly =
    input<true>();
  readonly inputRequired =
    input(false,
      { transform: booleanAttribute });

  readonly controlDisabled =
    signal(false);
  readonly controlIsInvalid =
    signal(false);
  readonly formControl =
    signal<AbstractControl>(
      new FormControl());

  readonly input =
    viewChild.required<ElementRef>('input');

  constructor() {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.formControl.set(
      this.ngControl.control ??
      this.formControl());

    this.addErrorListener();
  }

  private addErrorListener() {
    this.formControl().events.pipe(
      filter(e =>
        e instanceof PristineChangeEvent ||
        e instanceof StatusChangeEvent
      ),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.controlIsInvalid.set(
        FormHelper.isInvalid(this.formControl()));
    });
  }

  _onChange: any = () => {}
  _onTouched: any = () => {}

  registerOnChange(fn: (val: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.controlDisabled.set(isDisabled);
  }

  writeValue(obj : any) : void {
    this.input().nativeElement.value = obj;
  }

  abstract controlHasChanged(event : Event) : void;
}