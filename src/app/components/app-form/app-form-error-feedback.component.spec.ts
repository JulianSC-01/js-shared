import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormErrorFeedbackComponent } from './app-form-error-feedback.component';

describe('AppFormErrorFeedbackComponent', () => {
  let component: AppFormErrorFeedbackComponent;
  let fixture: ComponentFixture<AppFormErrorFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormErrorFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormErrorFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});