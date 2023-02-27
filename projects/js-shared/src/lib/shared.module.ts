import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { FormErrorFeedbackComponent } from './components/form-error-feedback/form-error-feedback.component';
import { FormErrorHeaderComponent } from './components/form-error-header/form-error-header.component';
import { FormInputNumberComponent } from './components/form-input-number/form-input-number.component';
import { FormInputSelectComponent } from './components/form-input-select/form-input-select.component';
import { FormInputTextComponent } from './components/form-input-text/form-input-text.component';
import { FormLabelComponent } from './components/form-label/form-label.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AlertComponent,
    FormErrorFeedbackComponent,
    FormErrorHeaderComponent,
    FormInputNumberComponent,
    FormInputSelectComponent,
    FormInputTextComponent,
    FormLabelComponent,
    PageFooterComponent,
    PageHeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    FormErrorFeedbackComponent,
    FormErrorHeaderComponent,
    FormInputNumberComponent,
    FormInputSelectComponent,
    FormInputTextComponent,
    FormLabelComponent,
    PageFooterComponent,
    PageHeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }