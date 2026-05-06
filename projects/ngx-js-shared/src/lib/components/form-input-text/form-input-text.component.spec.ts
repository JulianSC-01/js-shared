import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { beforeEach, describe, expect, test } from "vitest";
import { FormInputTextComponent } from './form-input-text.component';

describe('FormInputTextComponent', () => {
  let component: FormInputTextComponent;
  let fixture: ComponentFixture<FormInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormInputTextComponent
      ]
    })
    .overrideComponent(FormInputTextComponent, {
      add: {
        providers: [
          {
            provide: NgControl,
            useValue: {}
          }
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputTextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  test('should create', () => {
    expect(component).toBeDefined();
  });
});