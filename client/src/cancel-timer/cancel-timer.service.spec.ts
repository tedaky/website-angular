import {
  async,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs';

import { CancelTimerService } from './cancel-timer.service';

describe('PromptUpdateService', (): void => {
  let injector: TestBed;
  let service: CancelTimerService;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      providers: [
        CancelTimerService
      ]
    });
  }));
  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(CancelTimerService);
  });

  it('should be created', (): void => {
    expect<CancelTimerService>(service).toBeTruthy();
  });

  it('#cancel should return `Observable<number>`', (): void => {
    expect<Observable<number>>(service.cancel(60 * 1000)).toBeTruthy();
  });
});
