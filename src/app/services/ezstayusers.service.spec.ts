import { TestBed } from '@angular/core/testing';

import { EzstayusersService } from './ezstayusers.service';

describe('EzstayusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EzstayusersService = TestBed.get(EzstayusersService);
    expect(service).toBeTruthy();
  });
});
