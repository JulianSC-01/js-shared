import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormField } from '@angular/forms/signals';
import { beforeEach, describe, expect, it } from "vitest";
import { FormSignalInputTextComponent } from './form-signal-input-text.component';

describe('FormSignalInputTextComponent', () => {
  let component: FormSignalInputTextComponent;
  let fixture: ComponentFixture<FormSignalInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormSignalInputTextComponent
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .overrideComponent(
      FormSignalInputTextComponent, {
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
      FormSignalInputTextComponent);

    component = fixture.componentInstance;

    fixture.componentRef.
      setInput('inputShowErrors', false);

    await fixture.whenStable();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
