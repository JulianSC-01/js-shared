import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'js-shared';

import { AppFormTemplateComponent } from './app-form-template.component';

describe('AppFormTemplateComponent', () => {
  let component: AppFormTemplateComponent;
  let fixture: ComponentFixture<AppFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ AppFormTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});