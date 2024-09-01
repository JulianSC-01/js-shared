import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [
    CommonModule
  ],
  selector: 'app-form-label',
  standalone: true,
  styleUrl: './form-label.component.css',
  templateUrl: './form-label.component.html'
})
export class FormLabelComponent {
  @Input() labelControlId? : string;
  @Input() labelInvisible? : boolean = false;
  @Input() labelRequired? : boolean = false;

  constructor() { }
}