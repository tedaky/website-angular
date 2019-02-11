import {
  async,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';

import { PromptUpdateService } from './prompt-update.service';

interface UpdateAvailableEvent {
  current: {
    hash: string;
    appData?: Object;
  };
  available: {
    hash: string;
    appData?: Object;
  };
}

const updateAvailableEvent: UpdateAvailableEvent = {
  current: {
    hash: 'currentUpdateAvailableEvent',
    appData: {}
  },
  available: {
    hash: 'availableUpdateAvailableEvent',
    appData: {}
  }
};

class FakeSwUpdate {
  public available: Observable<UpdateAvailableEvent> = Observable.create(
    (observer: any): void => {
      observer.next(updateAvailableEvent);
    });
  public activateUpdate(): Promise<void> {
    return new Promise((resolve, reject) => { });
  }
}

describe('PromptUpdateService', (): void => {
  let injector: TestBed;
  let service: PromptUpdateService;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SwUpdate,
          useClass: FakeSwUpdate
        },
        PromptUpdateService
      ]
    });
  }));
  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(PromptUpdateService);
  });

  it('should be created', (): void => {
    expect<PromptUpdateService>(service).toBeTruthy();
  });

  it('#promptUpdate', (): void => {
    service.promptUpdate().subscribe((val: UpdateAvailableEvent): void => {
      expect<UpdateAvailableEvent>(val).toBeTruthy();
    });
  });

  it('#reload', (): void => {
    expect<void>(service.reload()).not.toBeTruthy();
  });
});
