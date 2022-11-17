import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FocusService } from '../focus.service';

@Component({
  selector: 'app-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements AfterViewInit {

  @Input() pageTitle? : string = '';

  @ViewChild('header') header? : ElementRef;

  constructor(
    private focusService : FocusService,
    private titleService : Title) { }

  ngAfterViewInit() : void {
    this.focusService.focusMainHeader();
    if (this.header) {
      this.titleService.setTitle(
        this.pageTitle === '' ? 
        this.header.nativeElement.innerText : this.pageTitle);
    }
  }
}