import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'js-shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home.component';
import { AppAlertComponent } from './components/app-alert/app-alert.component';
import { AppErrorValidationComponent } from './components/app-error-validation/app-error-validation.component';
import { AppPageFooterComponent } from './components/app-page-footer/app-page-footer.component';
import { AppPageHeaderComponent } from './components/app-page-header/app-page-header.component';
import { AppSpinnerComponent } from './components/app-spinner/app-spinner.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    // Component Examples
    AppAlertComponent,
    AppErrorValidationComponent,
    AppPageFooterComponent,
    AppPageHeaderComponent,
    AppSpinnerComponent
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