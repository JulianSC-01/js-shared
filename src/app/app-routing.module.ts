import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './components/app-home.component';
import { AppAlertComponent } from './components/app-alert/app-alert.component';
import { AppFormReactiveComponent } from './components/app-form-reactive/app-form-reactive.component';
import { AppFormTemplateComponent } from './components/app-form-template/app-form-template.component';
import { AppPageFooterComponent } from './components/app-page-footer/app-page-footer.component';
import { AppPageHeaderComponent } from './components/app-page-header/app-page-header.component';
import { AppSpinnerComponent } from './components/app-spinner/app-spinner.component';

import { AppFormErrorHeaderComponent } from './components/app-form/app-form-error-header.component';
import { AppFormErrorFeedbackComponent } from './components/app-form/app-form-error-feedback.component';
import { AppFormLabelComponent } from './components/app-form/app-form-label.component';
import { AppFormInputTextComponent } from './components/app-form/app-form-input-text.component';

const routes: Routes = [
  { path : '',
    component : AppHomeComponent
  },
  { path : 'alert',
    component : AppAlertComponent
  },
  { path : 'formReactive',
    component : AppFormReactiveComponent,
    children: [
      { path: '', redirectTo: 'errorHeader', pathMatch: 'full' },
      { path: 'errorHeader', component: AppFormErrorHeaderComponent },
      { path: 'errorFeedback', component: AppFormErrorFeedbackComponent },
      { path: 'formLabel', component: AppFormLabelComponent },
      { path: 'formInputText', component: AppFormInputTextComponent }
    ]
  },
  { path : 'formTemplate',
    component : AppFormTemplateComponent,
    children: [
      { path: '', redirectTo: 'errorHeader', pathMatch: 'full' },
      { path: 'errorHeader', component: AppFormErrorHeaderComponent },
      { path: 'errorFeedback', component: AppFormErrorFeedbackComponent },
      { path: 'formLabel', component: AppFormLabelComponent },
      { path: 'formInputText', component: AppFormInputTextComponent }
    ]
  },
  { path : 'pagefooter',
    component : AppPageFooterComponent
  },
  { path : 'pageheader',
    component : AppPageHeaderComponent
  },
  { path : 'spinner',
    component : AppSpinnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }