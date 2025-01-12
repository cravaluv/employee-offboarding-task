import {Component, OnInit} from '@angular/core';
import {OffboardingService} from '../../offboarding.service';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../../offboarding.model';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit {

  employeeId: number | null = null;
  employee: Employee | null = null;

  constructor(
    private route: ActivatedRoute,
    private offboardingService: OffboardingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.employeeId = +params.get('id')!;  // Konwertujemy id na liczbę
      this.getEmployeeDetails();
    });
  }

  getEmployeeDetails(): void {
    if (this.employeeId !== null) {
      this.offboardingService.fetchEmployeeDetails(this.employeeId).subscribe((data: Employee) => {
        this.employee = data;
      });
    }
  }

}
