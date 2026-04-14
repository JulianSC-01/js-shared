import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { beforeEach, describe, expect, it } from "vitest";
import { FormInputNumberComponent } from './form-input-number.component';

describe('FormInputNumberComponent', () => {
  let component: FormInputNumberComponent;
  let fixture: ComponentFixture<FormInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormInputNumberComponent
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .overrideComponent(FormInputNumberComponent, {
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

    fixture = TestBed.createComponent(FormInputNumberComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});