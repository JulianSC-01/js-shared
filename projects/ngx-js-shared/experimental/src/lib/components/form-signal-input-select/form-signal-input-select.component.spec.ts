import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormField } from '@angular/forms/signals';
import { beforeEach, describe, expect, it } from "vitest";
import { FormSignalInputSelectComponent } from './form-signal-input-select.component';

describe('FormSignalInputSelectComponent', () => {
  let component: FormSignalInputSelectComponent;
  let fixture: ComponentFixture<FormSignalInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormSignalInputSelectComponent
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .overrideComponent(
      FormSignalInputSelectComponent, {
        add: {
          providers: [
            {
              provide: FormField,
              useValue: {}
            }
          ]
        }
    }).compileComponents();

    fixture = TestBed.createComponent(
      FormSignalInputSelectComponent);

    component = fixture.componentInstance;

    fixture.componentRef.
      setInput('inputShowErrors', false);

    await fixture.whenStable();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
