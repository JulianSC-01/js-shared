import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'js-shared';

import { AppFormReactiveComponent } from './app-form-reactive.component';

describe('AppFormReactiveComponent', () => {
  let component: AppFormReactiveComponent;
  let fixture: ComponentFixture<AppFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ AppFormReactiveComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});