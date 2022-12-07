import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'js-shared';

import { AppErrorValidationComponent } from './app-error-validation.component';

describe('AppErrorValidationComponent', () => {
  let component: AppErrorValidationComponent;
  let fixture: ComponentFixture<AppErrorValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ AppErrorValidationComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppErrorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});