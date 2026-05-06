import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, test } from "vitest";
import { FormErrorHeaderComponent } from './form-error-header.component';

describe('FormErrorHeaderComponent', () => {
  let component: FormErrorHeaderComponent;
  let fixture: ComponentFixture<FormErrorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormErrorHeaderComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormErrorHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  test('should create', () => {
    expect(component).toBeDefined();
  });
});