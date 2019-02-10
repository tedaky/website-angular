import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  MainService,
  Message
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
      .pipe<Message[]>(distinctUntilChanged<Message[]>())
      .subscribe(
        (res: Message[]): void => {
          this.messages = res;
        },
        (err) => {
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
    this.mainServiceSub.unsubscribe();
  }
}
