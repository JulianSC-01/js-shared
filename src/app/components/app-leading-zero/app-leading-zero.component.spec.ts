import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppLeadingZeroComponent } from './app-leading-zero.component';

describe('AppLeadingZero', () => {
  let component: AppLeadingZeroComponent;
  let fixture: ComponentFixture<AppLeadingZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppLeadingZeroComponent
      ],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLeadingZeroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});