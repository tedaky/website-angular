import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { MainService } from './main.service';
import {
  Message,
  Response
} from '../../../types/message';

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.pug',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnDestroy {

  /**
   * Title Holder
   */
  private _title: string;
  /**
   * Get the title
   */
  public get title(): string {
    return this._title;
  }
  /**
   * Set the title
   */
  public set title(val: string) {
    this._title = val;
  }

  /**
   * Message Holder
   */
  private _message: Array<Message>;
  /**
   * Get the message
   */
  public get message(): Array<Message> {
    return this._message;
  }
  /**
   * Set the message
   */
  public set message(val: Array<Message>) {
    this._message = val;
  }

  /**
   * Subscribe to the Message Service
   */
  private mainServiceSub: Subscription;

  public constructor(
    private mainService: MainService
  ) { }

  public ngOnInit(): void {
    this.title = 'Angular Website';
    this.message = this.message || [];
    this.subToMessage();
  }

  /**
   * Create subscription for the Message
   */
  private subToMessage(): void {
    this.mainServiceSub = this.mainService.message
      .subscribe(
        (res: Response): void => {
          this.message = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  public ngOnDestroy(): void {
    if (this.mainServiceSub) {
      this.mainServiceSub.unsubscribe();
    }
  }
}
