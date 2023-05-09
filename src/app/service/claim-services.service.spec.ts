import { TestBed } from '@angular/core/testing';

import { ClaimServicesService } from './claim-services.service';

describe('ClaimServicesService', () => {
  let service: ClaimServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
