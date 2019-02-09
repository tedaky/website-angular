import { UpdateAvailableEvent } from '@angular/service-worker';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  interval,
  Observable,
  Subscription
} from 'rxjs';
import { take } from 'rxjs/operators';
import { PromptUpdateService } from './prompt-update.service';
import { promptUpdateAnimations } from './prompt-update.animations';

@Component({
  selector: 'app-prompt-update-component',
  templateUrl: './prompt-update.component.html',
  styleUrls: ['./prompt-update.component.sass'],
  animations: promptUpdateAnimations
})
export class PromptUpdateComponent implements OnInit, OnDestroy {

  /**
   * Variable that tells the Update Prompt to be available
   */
  public updateAvailable: boolean;
  /**
   * Variable to close the Update Prompt overriding `updateAvailable`
   */
  public closeUpdate: boolean;

  /**
   * Subscribe to prompt update service
   */
  private promptUpdateServiceSub: Subscription;
  /**
   * Subscribe to the cancel count down
   */
  private cancelSub: Subscription;

  public constructor(
    private promptUpdateService: PromptUpdateService
  ) { }

  public ngOnInit(): void {
    this.updateAvailable = false;
    this.closeUpdate = false;
    this.promptUpdate();
  }

  /**
   * Create subscription to update
   */
  private promptUpdate(): void {
    this.promptUpdateServiceSub = this.promptUpdateService.promptUpdate().subscribe(
      // Next
      (next: UpdateAvailableEvent): void => {
        this.cancelUpdate();
      },
      // Error
      (err: any): void => {
        console.log(err);
      },
      // Complete
      (): void => {
        console.log('Update Available Complete');
      }
    );
  }

  /**
   * Cancel the update request to update after 20 seconds
   */
  private cancelUpdate(): void {
    this.updateAvailable = true;
    const cancelInterval$: Observable<number> = interval(30 * 1000);
    const cancel: Observable<number> = cancelInterval$.pipe<number>(take(1));
    this.cancelSub = cancel.subscribe(
      // Next
      (next: number): void => {
        this.updateAvailable = false;
        if (this.cancelSub) {
          this.cancelSub.unsubscribe();
        }
      },
      // Error
      (err: any): void => {
        console.log(err);
      },
      // Complete
      (): void => {
        console.log('Cancel Update Available Complete');
      }
    );
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
  public close() {
    this.closeUpdate = true;
  }

  public ngOnDestroy(): void {
    if (this.promptUpdateServiceSub) {
      this.promptUpdateServiceSub.unsubscribe();
    }
    if (this.cancelSub) {
      this.cancelSub.unsubscribe();
    }
  }
}
