import {Component, OnInit} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {OffboardingService} from '../../offboarding.service';
import {Employee} from '../../offboarding.model';
import {JoinByPropertyPipe} from '../../../../shared/pipes/join-by-property.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {Router} from '@angular/router';
import {MatTab, MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-employees-list',
  imports: [MatTableModule, JoinByPropertyPipe, MatFormFieldModule, MatInputModule, MatTab, MatTabGroup],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss'
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filterValue: string = '';
  displayedColumns: string[] = ['fullName', 'email', 'department', 'equipment', 'status'];

  constructor(private offboardingService: OffboardingService, private router: Router) {}

  ngOnInit(): void {
    this.offboardingService.employees$.subscribe(employees => {
      this.employees = employees;
      this.applyFilter();
    });
  }

  applyFilter(event?: Event) {
    if (event) {
      this.filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    }

    if (this.filterValue) {
      this.filteredEmployees = this.employees.filter(employee => {
        const combinedFields = `${employee.name?.toLowerCase()} ${employee.department?.toLowerCase()}`;
        return combinedFields.includes(this.filterValue);
      });
    } else {
      this.filteredEmployees = [...this.employees]; // No filter, show all employees
    }
  }

  onRowClick(employee: Employee) {
    void this.router.navigate([`offboarding/employee/${employee.id}`]);
  }
}
