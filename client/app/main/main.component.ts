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
  public title: string;
  public message: Message;
  private mainServiceSub: Subscription;

  constructor(
    private mainService: MainService
  ) { }

  public ngOnInit(): void {
    this.title = 'angular-website';
    this.setMessage();
    this.getMessage();
  }

  /**
   * Create subscription for the Message
   */
  private getMessage(): void {
    this.mainServiceSub = this.mainService.getMessage()
      .pipe<Message>(distinctUntilChanged<Message>())
      .subscribe((res: Message): void => {
        this.message = {
          message_id: res.message_id,
          message_description: res.message_description
        };
      });
  }

  /**
   * Set the Message by default
   */
  private setMessage(): void {
    this.message = this.message || {
      message_id: 1,
      message_description: 'loading'
    };
  }

  ngOnDestroy(): void {
    this.mainServiceSub.unsubscribe();
  }
}
