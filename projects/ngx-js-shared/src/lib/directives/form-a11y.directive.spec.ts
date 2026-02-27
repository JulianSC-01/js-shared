import { provideZonelessChangeDetection } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FormA11yDirective } from "./form-a11y.directive";

describe('FormA11yDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection()
      ]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormA11yDirective();
      expect(directive).toBeTruthy();
    });
  });
});