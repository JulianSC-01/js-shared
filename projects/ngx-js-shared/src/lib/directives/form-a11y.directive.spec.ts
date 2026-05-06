import { TestBed } from "@angular/core/testing";
import { beforeEach, describe, expect, test } from "vitest";
import { FormA11yDirective } from "./form-a11y.directive";

describe('FormA11yDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  test('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormA11yDirective();
      expect(directive).toBeDefined();
    });
  });
});