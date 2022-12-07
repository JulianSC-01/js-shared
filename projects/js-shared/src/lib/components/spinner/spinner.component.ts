import { Component, Input, OnInit } from '@angular/core';

const SPINNER_BORDER = 'spinner-border';
const SPINNER_GROW = 'spinner-grow';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnInit {

  @Input() spinnerAccessibleText? : string = 'Loading...';
  @Input() spinnerColor? : string = '';
  @Input() spinnerSmall? : boolean = false;
  @Input() spinnerStyle? : string = SPINNER_BORDER;
 
  public spinnerClass : string = '';

  constructor() { }

  ngOnInit() : void {
    let spinnerSize : string = '';

    if (this.spinnerSmall) {
      switch (this.spinnerStyle) {
        case SPINNER_BORDER:
          spinnerSize = ' spinner-border-sm';
          break;
        case SPINNER_GROW:
          spinnerSize = ' spinner-grow-sm';
          break;
      }
    }

    this.spinnerClass = 
      this.spinnerStyle + spinnerSize;
    
    if (this.spinnerColor !== '') {
      this.spinnerClass = this.spinnerClass + ' ' + this.spinnerColor;
    }
  }
}