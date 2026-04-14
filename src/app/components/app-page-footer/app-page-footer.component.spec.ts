import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from "vitest";
import { AppPageFooterComponent } from './app-page-footer.component';

describe('AppPageFooterComponent', () => {
  let component: AppPageFooterComponent;
  let fixture: ComponentFixture<AppPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppPageFooterComponent
      ],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPageFooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});