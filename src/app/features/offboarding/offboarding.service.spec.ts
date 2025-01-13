import { TestBed } from '@angular/core/testing';

import { OffboardingService } from './offboarding.service';
import {HttpClientModule} from '@angular/common/http';

describe('OffboardingService', () => {
  let service: OffboardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OffboardingService]
    });
    service = TestBed.inject(OffboardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
