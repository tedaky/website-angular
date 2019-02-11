import {
  async,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';

import { PromptUpdateService } from './prompt-update.service';

interface UpdateAvailableEvent {
  current: string;
  available: string;
}

const updateAvailableEvent: UpdateAvailableEvent = {
  current: 'currentUpdateAvailableEvent',
  available: 'availableUpdateAvailableEvent'
};

class FakeSwUpdate {
  public available: Observable<UpdateAvailableEvent> = Observable.create(
    (observer: any): void => {
      observer.next(updateAvailableEvent);
    });
  public activateUpdate(): Promise<void> {
    return new Promise(() => { });
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
    service.promptUpdate().subscribe((val): void => {
      expect(val).toBeTruthy();
    });
  });

  it('#reload', (): void => {
    expect<void>(service.reload()).not.toBeTruthy();
  });
});
