import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { beforeEach, describe, expect, it } from "vitest";
import { FormInputTextComponent } from './form-input-text.component';

describe('FormInputTextComponent', () => {
  let component: FormInputTextComponent;
  let fixture: ComponentFixture<FormInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormInputTextComponent
      ],
      providers: [
        provideZonelessChangeDetection()
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});