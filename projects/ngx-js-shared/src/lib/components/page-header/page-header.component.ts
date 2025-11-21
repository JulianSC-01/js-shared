import {
  AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef,
  inject, Injector, input, OnInit, untracked, viewChild
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FocusService } from '../../services/focus.service';

@Component({
  selector: 'app-page-header',
  standalone: true,
  styleUrl: './page-header.component.css',
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent
  implements AfterViewInit, OnInit {
  private readonly focusService =
    inject(FocusService);
  private readonly injector =
    inject(Injector);
  private readonly titleService =
    inject(Title);

  readonly pageTitle =
    input('');

  readonly header =
    viewChild.required<ElementRef>('header');

  ngOnInit(): void {
    effect(() => {
      const header =
        untracked(this.header);

      if (header) {
        this.titleService.setTitle(
          this.pageTitle() === '' ?
            header.nativeElement.innerText :
            this.pageTitle());
      }
    }, { injector: this.injector });
  }

  ngAfterViewInit() : void {
    this.focusService.focusMainHeader();
  }
}