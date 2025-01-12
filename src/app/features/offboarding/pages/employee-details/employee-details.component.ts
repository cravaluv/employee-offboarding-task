import {Component, OnInit} from '@angular/core';
import {OffboardingService} from '../../offboarding.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../../offboarding.model';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialog} from '@angular/material/dialog';
import {OffboardModalComponent} from './offboard-modal/offboard-modal.component';

@Component({
  selector: 'app-employee-details',
  imports: [MatIconModule, MatButtonModule, MatDividerModule, MatListModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit {

  employeeId: number | null = null;
  employee: Employee | null = null;

  constructor(
    private route: ActivatedRoute,
    private offboardingService: OffboardingService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.employeeId = +params.get('id')!;
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

  goBack() {
    void this.router.navigate(['offboarding/employee-list']);
  }

  offboard() {
    this.dialog.open(OffboardModalComponent, {
      width: '90%',
      maxWidth: '90vw',
      height: 'auto',
      hasBackdrop: true,
      disableClose: true,
    });
  }
}
