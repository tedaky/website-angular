import { Injectable } from '@angular/core';
import {
  SwUpdate,
  UpdateAvailableEvent
} from '@angular/service-worker';
import { Observable } from 'rxjs';

@Injectable()
export class PromptUpdateService {

  public constructor(
    private swUpdate: SwUpdate
  ) { }

  /**
   * Observe the `UpdateAvailableEvent`
   */
  public get promptUpdate(): Observable<UpdateAvailableEvent> {
    return this.swUpdate.available;
  }

  /**
   * Activate the update then reload
   */
  public reload(): void {
    this.swUpdate.activateUpdate().then<void, never>(
      // onfulfilled
      (): void => {
        document.location.reload();
      });
  }
}
