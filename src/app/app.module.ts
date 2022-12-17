import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'js-shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home.component';
import { AppAlertComponent } from './components/app-alert/app-alert.component';
import { AppFormReactiveComponent } from './components/app-form-reactive/app-form-reactive.component';
import { AppPageFooterComponent } from './components/app-page-footer/app-page-footer.component';
import { AppPageHeaderComponent } from './components/app-page-header/app-page-header.component';
import { AppSpinnerComponent } from './components/app-spinner/app-spinner.component';

import { AppFormErrorHeaderComponent } from './components/app-form/app-form-error-header.component';
import { AppFormErrorFeedbackComponent } from './components/app-form/app-form-error-feedback.component';
import { AppFormLabelComponent } from './components/app-form/app-form-label.component';
import { AppFormInputTextComponent } from './components/app-form/app-form-input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    // Component Examples
    AppAlertComponent,
    AppFormReactiveComponent,
    AppPageFooterComponent,
    AppPageHeaderComponent,
    AppSpinnerComponent,
    // Subcomponents
    AppFormErrorHeaderComponent,
    AppFormErrorFeedbackComponent,
    AppFormLabelComponent,
    AppFormInputTextComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }