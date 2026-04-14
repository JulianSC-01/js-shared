import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { beforeEach, describe, expect, it } from "vitest";
import { FormInputSelectComponent } from './form-input-select.component';

describe('FormInputSelectComponent', () => {
  let component: FormInputSelectComponent;
  let fixture: ComponentFixture<FormInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormInputSelectComponent
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .overrideComponent(FormInputSelectComponent, {
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

    fixture = TestBed.createComponent(FormInputSelectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});