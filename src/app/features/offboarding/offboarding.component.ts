import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-offboarding',
  imports: [RouterModule, MatTabsModule],
  templateUrl: './offboarding.component.html',
  styleUrl: './offboarding.component.scss'
})
export class OffboardingComponent {

}
