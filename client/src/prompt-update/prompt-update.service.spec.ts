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

class FakeSwUpdate {
  public available = new Observable<UpdateAvailableEvent>(() => { });
  public activateUpdate() {
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
    expect<Observable<UpdateAvailableEvent>>(service.promptUpdate()).toBeTruthy();
  });

  it('#reload', (): void => {
    expect<void>(service.reload()).not.toBeTruthy();
  });
});
