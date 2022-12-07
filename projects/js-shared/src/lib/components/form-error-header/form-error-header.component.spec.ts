import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorHeaderComponent } from './form-error-header.component';

describe('FormErrorHeaderComponent', () => {
  let component: FormErrorHeaderComponent;
  let fixture: ComponentFixture<FormErrorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormErrorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});