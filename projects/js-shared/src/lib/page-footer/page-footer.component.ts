import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
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