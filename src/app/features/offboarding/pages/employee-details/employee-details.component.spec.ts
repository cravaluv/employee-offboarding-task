import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsComponent } from './employee-details.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {OffboardingService} from '../../offboarding.service';
import {HttpClientModule} from '@angular/common/http';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, EmployeeDetailsComponent],
      providers: [
        OffboardingService,
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ id: '123' }) }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
