import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { FormInputSelectComponent } from './form-input-select.component';

describe('FormInputSelectComponent', () => {
  let component: FormInputSelectComponent;
  let fixture: ComponentFixture<FormInputSelectComponent>;

  let mockNgControl: jasmine.SpyObj<NgControl> =
    jasmine.createSpyObj('NgControl', [], ['control']); ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormInputSelectComponent
      ],
      providers: [
        provideExperimentalZonelessChangeDetection()
      ]
    })
    .overrideComponent(FormInputSelectComponent, {
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

    fixture = TestBed.createComponent(FormInputSelectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});