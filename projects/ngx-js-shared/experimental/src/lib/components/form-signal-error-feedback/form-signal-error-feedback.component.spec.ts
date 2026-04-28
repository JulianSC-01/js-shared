import { ComponentRef, provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldTree, form } from '@angular/forms/signals';
import { beforeEach, describe, expect, it } from "vitest";
import { FormSignalErrorFeedbackComponent } from './form-signal-error-feedback.component';

interface SignalTestForm {
  formControlText: string;
}

describe('FormSignalErrorFeedbackComponent', () => {
  let component: FormSignalErrorFeedbackComponent<string>;
  let componentRef: ComponentRef<FormSignalErrorFeedbackComponent<string>>;
  let fixture: ComponentFixture<FormSignalErrorFeedbackComponent<string>>;

  let signalForm: FieldTree<SignalTestForm>;

  const signalFormModel = signal<SignalTestForm>({
    formControlText: ''
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormSignalErrorFeedbackComponent
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    TestBed.runInInjectionContext(() => {
      signalForm = form(signalFormModel);
    });

    fixture = TestBed.createComponent(
      FormSignalErrorFeedbackComponent<string>);

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('errorFormField', signalForm.formControlText);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
