import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  standalone: true,
  styleUrl: './page-footer.component.css',
  templateUrl: './page-footer.component.html'
})
export class PageFooterComponent implements OnInit {
  @Input() buildDate? : string | Date = '';
  @Input() versionNumber? : string | number = '';

  constructor() { }

  ngOnInit() : void {
    if (this.buildDate instanceof Date) {
      this.buildDate = this.buildDate.toLocaleDateString();
    }
  }
}