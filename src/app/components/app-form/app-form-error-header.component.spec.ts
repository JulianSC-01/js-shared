import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppFormErrorHeaderComponent } from './app-form-error-header.component';

describe('AppFormErrorHeaderComponent', () => {
  let component: AppFormErrorHeaderComponent;
  let fixture: ComponentFixture<AppFormErrorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppFormErrorHeaderComponent
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormErrorHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});