import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {OffboardingService} from './offboarding.service';

@Component({
  selector: 'app-offboarding',
  imports: [RouterModule, MatTabsModule],
  templateUrl: './offboarding.component.html',
  styleUrl: './offboarding.component.scss'
})
export class OffboardingComponent implements OnInit {

  constructor(private offboardingService: OffboardingService) {
  }
    ngOnInit(): void {
      this.offboardingService.fetchEmployees();
    }
}
