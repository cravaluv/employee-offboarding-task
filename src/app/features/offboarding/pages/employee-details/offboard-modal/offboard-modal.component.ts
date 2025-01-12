import {Component, OnInit} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-offboard-modal',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './offboard-modal.component.html',
  styleUrl: './offboard-modal.component.scss'
})
export class OffboardModalComponent implements OnInit {

  public offboardForm: FormGroup | undefined;

  constructor(private dialogRef: MatDialogRef<OffboardModalComponent>) {
  }

  ngOnInit(): void {
    this.offboardForm = new FormGroup({
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
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
