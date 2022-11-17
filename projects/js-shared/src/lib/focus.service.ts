import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FocusService {

  constructor() { }

  focusNavbar() : void {
    this.focusElement('#mainNavbarLink');
  }

  focusMainHeader() : void {
    this.focusElement('#mainHeader');
  }

  focusErrorHeader() : void {
    this.focusElement('#errorHeader');
  }

  focusSuccessHeader() : void {
    this.focusElement('#successHeader');
  }

  focusElement(elementId : string) : void {
    setTimeout(() => {
      const element = <HTMLElement>document.querySelector(elementId);
      if (element)
        element.focus();
    }, 100);
  }
}