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
  public logUpdateAvailable(): void {
    this.swUpdate.available.subscribe(
      (event: UpdateAvailableEvent): void => {
        this.consoleUpdateAvailable(event);
      });
  }

  /**
   * `console.log` the `current` and `available` versions
   *
   * @param event `UpdateAvailableEvent`
   */
  private consoleUpdateAvailable(event: UpdateAvailableEvent): void {
    console.log('current version is', event.current);
    console.log('available version is', event.available);
  }

  /**
   * Subscribe to the `UpdateActivatedEvent`
   *
   * Log the `previous` and `current` versions
   */
  public logUpdateActivated(): void {
    this.swUpdate.activated.subscribe(
      (event: UpdateActivatedEvent): void => {
        this.consoleUpdateActivated(event);
      });
  }

  /**
   * `console.log` the `previous` and `available` versions
   *
   * @param event `UpdateActivatedEvent`
   */
  private consoleUpdateActivated(event: UpdateActivatedEvent): void {
    console.log('old version was', event.previous);
    console.log('new version is', event.current);
  }
}
