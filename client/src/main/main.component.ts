import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  MainService,
  Message,
  MessagesResponse
} from './main.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { distinctUntilChanged } from 'rxjs/operators';

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
  public messages: Message[];

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
      .pipe<MessagesResponse>(distinctUntilChanged<MessagesResponse>())
      .subscribe(
        (res: MessagesResponse): void => {
          this.messages = res.message;
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
      message_id: 1,
      message_description: 'loading'
    }];
  }

  public ngOnDestroy(): void {
    if (this.mainServiceSub) {
      this.mainServiceSub.unsubscribe();
    }
  }
}
