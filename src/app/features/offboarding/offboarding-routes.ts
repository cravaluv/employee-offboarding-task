import {EmployeesListComponent} from './pages/employees-list/employees-list.component';
import {OffboardingService} from './offboarding.service';
import {Route} from '@angular/router';
import {EmployeeDetailsComponent} from './pages/employee-details/employee-details.component';
import {OffboardingComponent} from './offboarding.component';

export const OffboardingRoutes: Route[] = [
  {
    path: '',
    providers: [
      OffboardingService,
    ],
    component: OffboardingComponent,
    children: [
      { path: 'employees', component: EmployeesListComponent },
      { path: 'employee/:id', component: EmployeeDetailsComponent },
    ],
  },
];
