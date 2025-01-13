import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {OffboardingService} from '../../../offboarding.service';
import {OffboardEmployee} from '../../../offboarding.model';

export interface OffboardModalData {
  employeeId: number;
}

@Component({
  selector: 'app-offboarding-modal',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './offboarding-modal.component.html',
  styleUrl: './offboarding-modal.component.scss',
})
export class OffboardingModalComponent {

  public offboardingForm = new FormGroup({
    receiver: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    streetLine: new FormControl('', [
      Validators.required,
    ]),
    city: new FormControl('', [
      Validators.required,
    ]),
    postalCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{2}-\d{3}$/),
    ]),
    country: new FormControl('', [
      Validators.required,
    ]),
    notes: new FormControl('', [
      Validators.required,
    ]),
  });

  private employeeId;

  constructor(private dialogRef: MatDialogRef<OffboardingModalComponent>,
              @Inject(MAT_DIALOG_DATA) private data: OffboardModalData,
              private offboardingService: OffboardingService) {
    this.employeeId = data.employeeId;
  }

  onSubmit() {
    this.offboardingService.offboardEmployee(this.employeeId, this.offboardingForm.value as OffboardEmployee)
      .subscribe(() => this.dialogRef.close(true));
  }
}
