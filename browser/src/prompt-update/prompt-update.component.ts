import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';

import { promptUpdateAnimations } from './prompt-update.animations';

import { PromptUpdateService } from './prompt-update.service';
import { CancelTimerService } from '../cancel-timer/cancel-timer.service';

@Component({
  selector: 'app-prompt-update-component',
  templateUrl: './prompt-update.component.pug',
  styleUrls: ['./prompt-update.component.sass'],
  animations: promptUpdateAnimations
})
export class PromptUpdateComponent implements OnInit, OnDestroy {

  /**
   * updateAvailable Holder
   */
  private _updateAvailable: boolean;
  /**
   * Get updateAvailable
   */
  public get updateAvailable(): boolean {
    return this._updateAvailable;
  }
  /**
   * Set updateAvailable
   */
  public set updateAvailable(val: boolean) {
    this._updateAvailable = val;
  }

  /**
   * closeUpdate Holder
   */
  private _closeUpdate: boolean;
  /**
   * Get closeUpdate
   */
  public get closeUpdate(): boolean {
    return this._closeUpdate;
  }
  /**
   * Set closeUpdate
   */
  public set closeUpdate(val: boolean) {
    this._closeUpdate = val;
  }

  /**
   * continueCounter Holder
   */
  private _continueCounter: number;
  /**
   * Get continueCounter
   */
  private get continueCounter(): number {
    return this._continueCounter;
  }
  /**
   * Set continueCounter
   */
  private set continueCounter(val: number) {
    this._continueCounter = val;
  }

  /**
   * promptUpdateServiceSub Holder
   */
  private _promptUpdateServiceSub: Subscription;
  /**
   * Get promptUpdateServiceSub
   */
  private get promptUpdateServiceSub(): Subscription {
    return this._promptUpdateServiceSub;
  }
  /**
   * Set promptUpdateServiceSub
   */
  private set promptUpdateServiceSub(val: Subscription) {
    this._promptUpdateServiceSub = val;
  }

  /**
   * cancelSub Holder
   */
  private _cancelSub: Subscription;
  /**
   * Get cancelSub
   */
  private get cancelSub(): Subscription {
    return this._cancelSub;
  }
  /**
   * Set cancelSub
   */
  private set cancelSub(val: Subscription) {
    this._cancelSub = val;
  }

  /**
   * reissueSub Holder
   */
  private _reissueSub: Subscription;
  /**
   * Get reissueSub
   */
  private get reissueSub(): Subscription {
    return this._reissueSub;
  }
  /**
   * Set reissueSub
   */
  private set reissueSub(val: Subscription) {
    this._reissueSub = val;
  }


  public constructor(
    private promptUpdateService: PromptUpdateService,
    private cancelTimerService: CancelTimerService
  ) { }

  public ngOnInit(): void {
    this.updateAvailable = false;
    this.closeUpdate = false;
    this.continueCounter = 0;
    this.promptUpdate();
  }

  /**
   * Create subscription to update
   */
  private promptUpdate(): void {
    this.promptUpdateServiceSub = this.promptUpdateService.promptUpdate.subscribe(
      // Next
      (): void => {
        this.updateAvailable = true;
        // Set the schedule to clear the prompt automatically
        this.cancelUpdate();
      });
  }

  /**
   * Cancel the update request to update after 30 seconds
   */
  private cancelUpdate(): void {
    this.cancelSub = this.cancelTimerService.cancel(30 * 1000).subscribe(
      // Next
      (): void => {
        this.updateAvailable = false;
        if (this.cancelSub) {
          this.cancelSub.unsubscribe();
        }
        // If the update hasn't been activated, reissue the prompt
        this.reissueUpdate();
      });
  }

  /**
   * Reissue the update request to update
   * after 2 minutes of the prompt disappearing
   */
  private reissueUpdate(): void {
    this.reissueSub = this.cancelTimerService.cancel(2 * 60 * 1000).subscribe(
      // Next
      (): void => {
        this.updateAvailable = true;
        this.continueCounter++;
        if (this.reissueSub) {
          this.reissueSub.unsubscribe();
        }
        // Keep the update available prompt open after 5 attempts
        if (this.continueCounter < 5) {
          // Set the schedule to clear the prompt automatically
          this.cancelUpdate();
        }
      });
  }

  /**
   * Reload the application after clicking the reload button
   */
  public reload(): void {
    this.promptUpdateService.reload();
  }

  /**
   * Close the request to update
   */
  public close(): void {
    this.closeUpdate = true;
  }

  public ngOnDestroy(): void {
    if (this.promptUpdateServiceSub) {
      this.promptUpdateServiceSub.unsubscribe();
    }
    if (this.cancelSub) {
      this.cancelSub.unsubscribe();
    }
    if (this.reissueSub) {
      this.reissueSub.unsubscribe();
    }
  }
}
