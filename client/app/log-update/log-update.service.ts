import { Injectable } from '@angular/core';
import {
  SwUpdate,
  UpdateAvailableEvent,
  UpdateActivatedEvent
} from '@angular/service-worker';

@Injectable()
export class LogUpdateService {

  constructor(
    private swUpdate: SwUpdate
  ) { }

  public logUpdate() {
    this.swUpdate.available.subscribe((event: UpdateAvailableEvent): void => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    this.swUpdate.activated.subscribe((event: UpdateActivatedEvent): void => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
