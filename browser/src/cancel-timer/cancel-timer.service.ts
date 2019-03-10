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
    return interval(timer).pipe<number>(take<number>(1));
  }
}
