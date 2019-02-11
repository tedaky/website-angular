import { Injectable } from '@angular/core';
import {
  Observable,
  interval
} from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class CancelTimerService {

  /**
   * Create a timer observable
   *
   * @param timer - Interval in milliseconds
   */
  public cancel(timer: number): Observable<number> {
    const cancelInterval$: Observable<number> = interval(timer);
    const cancel: Observable<number> = cancelInterval$.pipe<number>(take(1));
    return cancel;
  }
}
