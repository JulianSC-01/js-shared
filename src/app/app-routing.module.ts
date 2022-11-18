import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './components/app-home.component';
import { AppAlertComponent } from './components/app-alert/app-alert.component';
import { AppPageFooterComponent } from './components/app-page-footer/app-page-footer.component';
import { AppPageHeaderComponent } from './components/app-page-header/app-page-header.component';
import { AppSpinnerComponent } from './components/app-spinner/app-spinner.component';

const routes: Routes = [
  { path : '', 
    component : AppHomeComponent 
  },
  { path : 'alert', 
    component : AppAlertComponent 
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