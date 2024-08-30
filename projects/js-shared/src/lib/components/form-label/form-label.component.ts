import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-label',
  templateUrl: './form-label.component.html',
  styleUrl: './form-label.component.css'
})
export class FormLabelComponent {

  @Input() labelControlId? : string;
  @Input() labelInvisible? : boolean = false;
  @Input() labelRequired? : boolean = false;

  constructor() { }
}