import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppFormErrorHeaderComponent } from './app-form-error-header.component';

describe('AppFormErrorHeaderComponent', () => {
  let component: AppFormErrorHeaderComponent;
  let fixture: ComponentFixture<AppFormErrorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppFormErrorHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormErrorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});