import {
  async,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';

import { CheckForUpdateService } from './check-for-update.service';

class FakeSwUpdate {
  public checkForUpdate() { }
}

describe('CheckForUpdateService', (): void => {
  let injector: TestBed;
  let service: CheckForUpdateService;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SwUpdate,
          useClass: FakeSwUpdate
        },
        CheckForUpdateService
      ]
    });
  }));
  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(CheckForUpdateService);
  });

  it('should be created', (): void => {
    expect<CheckForUpdateService>(service).toBeTruthy();
  });

  it('#checkForUpdate', (): void => {
    expect<void>(service.checkForUpdate()).not.toBeTruthy();
  });
});
