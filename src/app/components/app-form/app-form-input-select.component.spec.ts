import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormInputSelectComponent } from './app-form-input-select.component';

describe('AppFormInputSelectComponent', () => {
  let component: AppFormInputSelectComponent;
  let fixture: ComponentFixture<AppFormInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormInputSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});