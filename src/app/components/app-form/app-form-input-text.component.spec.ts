import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormInputTextComponent } from './app-form-input-text.component';

describe('AppFormInputTextComponent', () => {
  let component: AppFormInputTextComponent;
  let fixture: ComponentFixture<AppFormInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormInputTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});