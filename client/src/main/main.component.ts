import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { distinctUntilChanged } from 'rxjs/operators';

import { MainService } from './main.service';
import {
  Message,
  Response
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
  public message: Array<Message>;

  /**
   * Subscribe to the Message Service
   */
  private mainServiceSub: Subscription;

  public constructor(
    private mainService: MainService
  ) { }

  public ngOnInit(): void {
    this.title = 'Angular Website';
    this.setMessages();
    this.getMessages();
  }

  /**
   * Create subscription for the Message
   */
  private getMessages(): void {
    this.mainServiceSub = this.mainService.getMessages()
      .pipe<Response>(distinctUntilChanged<Response>())
      .subscribe(
        (res: Response): void => {
          this.message = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  /**
   * Set the Message by default
   */
  private setMessages(): void {
    this.message = this.message || [{
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
