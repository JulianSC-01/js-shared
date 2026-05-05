import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormField } from '@angular/forms/signals';
import { beforeEach, describe, expect, it } from "vitest";
import { FormSignalInputNumberComponent } from './form-signal-input-number.component';

describe('FormSignalInputNumberComponent', () => {
  let component: FormSignalInputNumberComponent;
  let fixture: ComponentFixture<FormSignalInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormSignalInputNumberComponent
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .overrideComponent(
      FormSignalInputNumberComponent, {
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
      FormSignalInputNumberComponent);

    component = fixture.componentInstance;

    fixture.componentRef.
      setInput('inputShowErrors', false);

    await fixture.whenStable();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
