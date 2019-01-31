import { TestBed } from '@angular/core/testing';

import { CheckForUpdateService } from './check-for-update.service';

describe('CheckForUpdateService', (): void => {
  beforeEach((): void => {
    TestBed.configureTestingModule({});
  });

  it('should be created', (): void => {
    const service: CheckForUpdateService = TestBed.get(CheckForUpdateService);
    expect<CheckForUpdateService>(service).toBeTruthy();
  });
});
