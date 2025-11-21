import { TestBed } from "@angular/core/testing";
import { FormA11yDirective } from "./form-a11y.directive";

describe('FormA11yDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormA11yDirective();
      expect(directive).toBeTruthy();
    });
  });
});