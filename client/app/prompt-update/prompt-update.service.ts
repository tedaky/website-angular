import { Injectable } from '@angular/core';
import {
  SwUpdate,
  UpdateAvailableEvent
} from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {

  constructor(
    private swUpdate: SwUpdate
  ) { }

  public promptUpdate(): void {
    this.swUpdate.available.subscribe((event: UpdateAvailableEvent): void => {
      if (confirm('An update is available. Please refresh the page.')) {
        this.swUpdate.activateUpdate().then<void, never>((): void => {
          document.location.reload();
        });
      }
    });
  }
}
