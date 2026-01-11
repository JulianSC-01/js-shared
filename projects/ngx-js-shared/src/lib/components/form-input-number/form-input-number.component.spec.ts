import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { FormInputNumberComponent } from './form-input-number.component';

describe('FormInputNumberComponent', () => {
  let component: FormInputNumberComponent;
  let fixture: ComponentFixture<FormInputNumberComponent>;

  let mockNgControl: jasmine.SpyObj<NgControl> =
    jasmine.createSpyObj('NgControl', [], ['control']); ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormInputNumberComponent
      ],
      providers: [
        provideExperimentalZonelessChangeDetection()
      ]
    })
    .overrideComponent(FormInputNumberComponent, {
      add: {
        providers: [
          {
            provide: NgControl,
            useValue: mockNgControl
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