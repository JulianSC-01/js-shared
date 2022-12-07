import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { FormErrorHeaderComponent } from './components/form-error-header/form-error-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AlertComponent,
    FormErrorHeaderComponent,
    PageFooterComponent,
    PageHeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    FormErrorHeaderComponent,
    PageFooterComponent,
    PageHeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }