import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'js-shared';

import { AppPageFooterComponent } from './app-page-footer.component';

describe('AppPageFooterComponent', () => {
  let component: AppPageFooterComponent;
  let fixture: ComponentFixture<AppPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      declarations: [ AppPageFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});