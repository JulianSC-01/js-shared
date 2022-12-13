import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormInputTextComponent } from './form-input-text.component';

describe('FormInputTextComponent', () => {
  let component: FormInputTextComponent;
  let fixture: ComponentFixture<FormInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});