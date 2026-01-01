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
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLeadingZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});