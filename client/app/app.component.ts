import {
  Component,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CheckForUpdateService } from './check-for-update/check-for-update.service';
// import { PromptUpdateService } from './prompt-update/prompt-update.service';
import { LogUpdateService } from './log-update/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private checkForUpdateService: CheckForUpdateService,
    // private promptUpdateService: PromptUpdateService,
    private logUpdateService: LogUpdateService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCheckForUpdateService();
      // this.loadPromptUpdateService();
      this.logUpdateAvailableService();
      this.logUpdateActivatedService();
    }
  }

  private loadCheckForUpdateService(): void {
    this.checkForUpdateService.checkForUpdate();
  }

  // private loadPromptUpdateService(): void {
  //   this.promptUpdateService.promptUpdate();
  // }

  private logUpdateAvailableService(): void {
    this.logUpdateService.logUpdateAvailable();
  }

  private logUpdateActivatedService(): void {
    this.logUpdateService.logUpdateActivated();
  }
}
