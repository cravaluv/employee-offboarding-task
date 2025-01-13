import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardingComponent } from './offboarding.component';
import {OffboardingService} from './offboarding.service';
import {HttpClientModule} from '@angular/common/http';

describe('OffboardingComponent', () => {
  let component: OffboardingComponent;
  let fixture: ComponentFixture<OffboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, OffboardingComponent],
      providers: [OffboardingService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
