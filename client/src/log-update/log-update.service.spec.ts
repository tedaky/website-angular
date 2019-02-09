import {
  async,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';

import { LogUpdateService } from './log-update.service';

interface UpdateAvailableEvent {
  current: { };
  available: { };
}
interface UpdateActivatedEvent {
  previous: { };
  current: { };
}

const updateAvailableEvent: UpdateAvailableEvent = {
  current: { },
  available: { }
};
const updateActivatedEvent: UpdateActivatedEvent = {
  previous: { },
  current: { }
};

class FakeSwUpdate {
  public available = new Observable<UpdateAvailableEvent>(() => { });
  public activated = new Observable<UpdateActivatedEvent>(() => { });
}

describe('LogUpdateService', (): void => {
  let injector: TestBed;
  let service: LogUpdateService;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SwUpdate,
          useClass: FakeSwUpdate
        },
        LogUpdateService
      ]
    });
  }));
  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(LogUpdateService);
  });

  it('should be created', (): void => {
    expect<LogUpdateService>(service).toBeTruthy();
  });

  it('#logUpdateAvailable', (): void => {
    expect<void>(service.logUpdateAvailable()).not.toBeTruthy();
  });

  it('#logUpdateActivated', (): void => {
    expect<void>(service.logUpdateActivated()).not.toBeTruthy();
  });
});
