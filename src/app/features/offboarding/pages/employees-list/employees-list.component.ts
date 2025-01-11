import {Component, OnInit} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {OffboardingService} from '../../offboarding.service';
import {Employee} from '../../offboarding.model';

@Component({
  selector: 'app-employees-list',
  imports: [MatTableModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss'
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private offboardingService: OffboardingService) {}

  ngOnInit(): void {
    this.offboardingService.employees$.subscribe(employees => this.employees = employees);
    this.offboardingService.fetchEmployees();
  }
}
