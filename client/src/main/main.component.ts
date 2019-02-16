import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { distinctUntilChanged } from 'rxjs/operators';

import { MainService } from './main.service';
import {
  IMessageResponse,
  MessageResponse
} from '../../../types/message';

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnDestroy {

  /**
   * The application main title
   */
  public title: string;
  /**
   * The Messages
   */
  public messages: IMessageResponse[];

  /**
   * Subscribe to the Message Service
   */
  private mainServiceSub: Subscription;

  public constructor(
    private mainService: MainService
  ) { }

  public ngOnInit(): void {
    this.title = 'Angular Website';
    this.setMessage();
    this.getMessage();
  }

  /**
   * Create subscription for the Message
   */
  private getMessage(): void {
    this.mainServiceSub = this.mainService.getMessage()
      .pipe<MessageResponse>(distinctUntilChanged<MessageResponse>())
      .subscribe(
        (res: MessageResponse): void => {
          this.messages = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  /**
   * Set the Message by default
   */
  private setMessage(): void {
    this.messages = this.messages || [{
      message_id: 0,
      message_description: 'loading',
      message_modified_at: new Date()
    }];
  }

  public ngOnDestroy(): void {
    if (this.mainServiceSub) {
      this.mainServiceSub.unsubscribe();
    }
  }
}
