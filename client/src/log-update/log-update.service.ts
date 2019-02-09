import { Injectable } from '@angular/core';
import {
  SwUpdate,
  UpdateAvailableEvent,
  UpdateActivatedEvent
} from '@angular/service-worker';

@Injectable()
export class LogUpdateService {

  public constructor(
    private swUpdate: SwUpdate
  ) { }

  /**
   * Subscribe to the `UpdateAvailableEvent`
   *
   * Log the `current` and `available` versions
   */
  public logUpdateAvailable() {
    this.swUpdate.available.subscribe((event: UpdateAvailableEvent): void => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
  }

  /**
   * Subscribe to the `UpdateActivatedEvent`
   *
   * Log the `previous` and `current` versions
   */
  public logUpdateActivated() {
    this.swUpdate.activated.subscribe((event: UpdateActivatedEvent): void => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
