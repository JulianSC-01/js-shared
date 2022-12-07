import { TestBed } from '@angular/core/testing';

import { AppFormService } from './app-form.service';

describe('AppFormServiceService', () => {
  let service: AppFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});