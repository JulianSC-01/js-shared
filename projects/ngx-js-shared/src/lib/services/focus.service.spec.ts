import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, test } from "vitest";
import { FocusService } from './focus.service';

describe('FocusService', () => {
  let service: FocusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusService);
  });

  test('should be created', () => {
    expect(service).toBeDefined();
  });
});