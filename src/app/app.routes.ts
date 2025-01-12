import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'offboarding/employee-list', pathMatch: 'full' },
  { path: 'offboarding', redirectTo: 'offboarding/employee-list', pathMatch: 'full' },
  { path: 'offboarding', loadChildren: () => import('./features/offboarding/offboarding-routes').then(mod => mod.OffboardingRoutes) },
  // { path: '**', redirectTo: 'offboarding/employees' },
];
