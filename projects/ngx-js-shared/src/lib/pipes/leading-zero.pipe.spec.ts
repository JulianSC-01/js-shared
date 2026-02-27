import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LeadingZeroPipe } from './leading-zero.pipe';

describe('LeadingZeroPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection()
      ]
    });
  });

  it('create an instance', () => {
    const pipe = new LeadingZeroPipe();
    expect(pipe).toBeTruthy();
  });
});
