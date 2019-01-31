import { TestBed } from '@angular/core/testing';

import { LogUpdateService } from './log-update.service';

describe('LogUpdateService', (): void => {
  beforeEach((): void => {
    TestBed.configureTestingModule({});
  });

  it('should be created', (): void => {
    const service: LogUpdateService = TestBed.get(LogUpdateService);
    expect<LogUpdateService>(service).toBeTruthy();
  });
});
