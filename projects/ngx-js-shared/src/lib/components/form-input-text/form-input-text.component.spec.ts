import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { FormInputTextComponent } from './form-input-text.component';

describe('FormInputTextComponent', () => {
  let component: FormInputTextComponent;
  let fixture: ComponentFixture<FormInputTextComponent>;

  let mockNgControl: jasmine.SpyObj<NgControl> =
    jasmine.createSpyObj('NgControl', [], ['control']); ;

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
            useValue: mockNgControl
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