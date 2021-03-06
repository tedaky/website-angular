import {
  Component,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { environment } from '../../../environments/environment';

import { CheckForUpdateService } from '../check-for-update/check-for-update.service';
import { LogUpdateService } from '../log-update/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public constructor(
    /**
     * `PLATFORM_ID` token
     */
    @Inject(PLATFORM_ID) private platformId: Object,
    private checkForUpdateService: CheckForUpdateService,
    private logUpdateService: LogUpdateService
  ) {
    this.loadServices((isPlatformBrowser(this.platformId) && environment.production));
  }

  public loadServices(env: boolean): void {
    if (env) {
      this.loadCheckForUpdateService();
      this.logUpdateAvailableService();
      this.logUpdateActivatedService();
    }
  }

  /**
   * Load the event to check for an update
   */
  private loadCheckForUpdateService(): void {
    this.checkForUpdateService.checkForUpdate();
  }

  /**
   * Log the `UpdateAvailableEvent`
   */
  private logUpdateAvailableService(): void {
    this.logUpdateService.logUpdateAvailable();
  }

  /**
   * Log the `UpdateActivatedEvent`
   */
  private logUpdateActivatedService(): void {
    this.logUpdateService.logUpdateActivated();
  }
}
