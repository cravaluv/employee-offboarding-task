import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'offboarding/employees', pathMatch: 'full' },
  { path: 'offboarding', redirectTo: 'offboarding/employees', pathMatch: 'full' },
  { path: 'offboarding', loadChildren: () => import('./features/offboarding/offboarding-routes').then(mod => mod.OffboardingRoutes) },
  { path: '**', redirectTo: 'offboarding/employees' },
];
