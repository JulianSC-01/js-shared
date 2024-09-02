import { Routes } from "@angular/router";
import { AppAlertComponent } from "./components/app-alert/app-alert.component";
import { AppFormReactiveComponent } from "./components/app-form-reactive/app-form-reactive.component";
import { AppFormTemplateComponent } from "./components/app-form-template/app-form-template.component";
import { AppFormErrorFeedbackComponent } from "./components/app-form/app-form-error-feedback.component";
import { AppFormErrorHeaderComponent } from "./components/app-form/app-form-error-header.component";
import { AppFormInputNumberComponent } from "./components/app-form/app-form-input-number.component";
import { AppFormInputSelectComponent } from "./components/app-form/app-form-input-select.component";
import { AppFormInputTextComponent } from "./components/app-form/app-form-input-text.component";
import { AppFormLabelComponent } from "./components/app-form/app-form-label.component";
import { AppHomeComponent } from "./components/app-home.component";
import { AppPageFooterComponent } from "./components/app-page-footer/app-page-footer.component";
import { AppPageHeaderComponent } from "./components/app-page-header/app-page-header.component";
import { AppSpinnerComponent } from "./components/app-spinner/app-spinner.component";

export const appRoutes : Routes = [
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
      { path: 'formInputNumber', component: AppFormInputNumberComponent },
      { path: 'formInputSelect', component: AppFormInputSelectComponent },
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
      { path: 'formInputNumber', component: AppFormInputNumberComponent },
      { path: 'formInputSelect', component: AppFormInputSelectComponent },
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