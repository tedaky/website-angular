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

  public promptUpdate(): Observable<UpdateAvailableEvent> {
    return this.swUpdate.available;
  }

  public prompt(): void {
    this.swUpdate.activateUpdate().then<void, never>((): void => {
      document.location.reload();
    });
  }
}
