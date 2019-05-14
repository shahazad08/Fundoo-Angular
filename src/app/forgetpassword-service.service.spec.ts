import { TestBed } from '@angular/core/testing';

import { ForgetpasswordServiceService } from './forgetpassword-service.service';

describe('ForgetpasswordServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForgetpasswordServiceService = TestBed.get(ForgetpasswordServiceService);
    expect(service).toBeTruthy();
  });
});
