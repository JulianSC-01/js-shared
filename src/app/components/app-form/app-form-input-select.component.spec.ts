import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppFormInputSelectComponent } from './app-form-input-select.component';

describe('AppFormInputSelectComponent', () => {
  let component: AppFormInputSelectComponent;
  let fixture: ComponentFixture<AppFormInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppFormInputSelectComponent
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormInputSelectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});