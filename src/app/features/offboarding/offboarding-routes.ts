import {Route} from '@angular/router';
import {EmployeeDetailsComponent} from './pages/employee-details/employee-details.component';
import {OffboardingComponent} from './offboarding.component';
import {EmployeesListComponent} from './pages/employees-list/employees-list.component';

export const OffboardingRoutes: Route[] = [
  {
    path: '',
    component: OffboardingComponent,
    children: [
      { path: 'employee-list', component: EmployeesListComponent },
      { path: 'employee/:id', component: EmployeeDetailsComponent },
    ],
  },
];
