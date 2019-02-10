import {
  Injectable,
  ApplicationRef
} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {
  concat,
  interval
} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { first } from 'rxjs/operators';

@Injectable()
export class CheckForUpdateService {

  public constructor(
    private applicationRef: ApplicationRef,
    private swUpdate: SwUpdate
  ) { }

  /**
   * Check for application static updates
   */
  public checkForUpdate(): void {
    /**
     * Allow the app to stabilize first, before starting polling for updates with `interval()`.
     */
    const appIsStable$: Observable<boolean> = this.applicationRef.isStable.pipe<boolean>(
      first<boolean, boolean>(
        (isStable): boolean => {
          return isStable === true;
        })
    );

    /**
     * Interval for every hour
     */
    const everyHour$: Observable<number> = interval(60 * 60 * 1000);
    const everyHourOnceAppIsStable$: Observable<number|boolean> = concat<boolean, number>(appIsStable$, everyHour$);

    everyHourOnceAppIsStable$.subscribe(
      (): Promise<void> => {
        return this.swUpdate.checkForUpdate();
      });
  }
}
