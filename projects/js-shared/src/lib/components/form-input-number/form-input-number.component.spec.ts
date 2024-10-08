import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormInputNumberComponent } from './form-input-number.component';

describe('FormInputNumberComponent', () => {
  let component: FormInputNumberComponent;
  let fixture: ComponentFixture<FormInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormInputNumberComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});