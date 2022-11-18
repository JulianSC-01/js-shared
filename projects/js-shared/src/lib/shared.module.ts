import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AlertComponent,
    PageFooterComponent,
    PageHeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    PageFooterComponent,
    PageHeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }