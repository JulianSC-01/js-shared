import { Routes } from "@angular/router";
import { AppLeadingZeroComponent } from "../components/app-leading-zero/app-leading-zero.component";

export const appPipeRoutes: Routes = [
  { path: '',
    redirectTo: 'leadingZero',
    pathMatch: 'full'
  },
  { path: 'leadingZero',
    component: AppLeadingZeroComponent
  }
];