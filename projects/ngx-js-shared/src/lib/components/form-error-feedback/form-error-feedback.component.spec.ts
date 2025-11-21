import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { FormErrorFeedbackComponent } from './form-error-feedback.component';

describe('AppErrorFeedbackComponent', () => {
  let component: FormErrorFeedbackComponent;
  let componentRef: ComponentRef<FormErrorFeedbackComponent>;
  let fixture: ComponentFixture<FormErrorFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormErrorFeedbackComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormErrorFeedbackComponent);
    component = fixture.componentInstance;

    componentRef = fixture.componentRef;
    componentRef.setInput('formControl', new FormControl());

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});