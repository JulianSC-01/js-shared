import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AlertComponent,
    PageFooterComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    PageFooterComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }