import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormInputNumberComponent } from './app-form-input-number.component';

describe('AppFormInputNumberComponent', () => {
  let component: AppFormInputNumberComponent;
  let fixture: ComponentFixture<AppFormInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormInputNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});