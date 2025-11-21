import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  standalone: true,
  styleUrl: './page-footer.component.css',
  templateUrl: './page-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFooterComponent {
  readonly buildDate =
    input('', {
      transform: (value: string | Date) =>
        value instanceof Date ?
          value.toLocaleDateString() : value
    });

  readonly versionNumber =
    input<string | number>('');
}