import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, test } from "vitest";
import { LeadingZeroPipe } from './leading-zero.pipe';

describe('LeadingZeroPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  test('create an instance', () => {
    const pipe = new LeadingZeroPipe();
    expect(pipe).toBeDefined();
  });
});
