import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppFocusService } from '../../services/app-focus.service';

@Component({
  selector: 'app-page-header',
  standalone: true,
  styleUrl: './page-header.component.css',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent implements AfterViewInit {
  @Input() pageTitle? : string = '';

  @ViewChild('header') header? : ElementRef;

  constructor(
    private focusService : AppFocusService,
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