import {
  Component,
  OnInit
} from '@angular/core';
import {
  AppService,
  Message
} from './app.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public title: string;
  public message: Message;

  public constructor (
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.title = 'angular-website';
    this.setMessage();
    this.getMessage();
  }

  private getMessage(): void {
    this.appService.getMessage()
      .pipe(distinctUntilChanged())
      .subscribe((res: Message): void => {
        this.message = {
          message_id: res.message_id,
          message_description: res.message_description
        };
      });
  }

  private setMessage(): void {
    this.message = {
      message_id: 1,
      message_description: 'loading'
    };
  }
}
