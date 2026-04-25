import { ComponentRef, provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { form } from '@angular/forms/signals';
import { beforeEach, describe, expect, it } from "vitest";
import { FormSignalErrorHeaderComponent } from './form-signal-error-header.component';

interface SignalTestForm {
  formControlText: string;
}

describe('FormSignalErrorHeaderComponent', () => {
  let component: FormSignalErrorHeaderComponent;
  let componentRef: ComponentRef<FormSignalErrorHeaderComponent>;
  let fixture: ComponentFixture<FormSignalErrorHeaderComponent>;

  const signalFormModel = signal<SignalTestForm>({
    formControlText: ''
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormSignalErrorHeaderComponent
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSignalErrorHeaderComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    TestBed.runInInjectionContext(() => {
      componentRef.setInput('errorFieldTree', form(signalFormModel));
    });

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});