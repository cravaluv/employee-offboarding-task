import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardingModalComponent } from './offboarding-modal.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OffboardingService} from '../../../offboarding.service';
import {HttpClientModule} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';

describe('OffboardingModalComponent', () => {
  let component: OffboardingModalComponent;
  let fixture: ComponentFixture<OffboardingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, OffboardingModalComponent],
      providers: [
        OffboardingService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        provideAnimations()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffboardingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
