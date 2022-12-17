import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormLabelComponent } from './app-form-label.component';

describe('AppFormLabelComponent', () => {
  let component: AppFormLabelComponent;
  let fixture: ComponentFixture<AppFormLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});