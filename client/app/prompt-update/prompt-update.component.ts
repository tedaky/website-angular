import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { PromptUpdateService } from './prompt-update.service';

@Component({
  selector: 'app-prompt-update-component',
  templateUrl: './prompt-update.component.html',
  styleUrls: ['./prompt-update.component.sass']
})
export class PromptUpdateComponent implements OnInit, OnDestroy {

  public hasUpdate: boolean;
  public closeUpdate: boolean;

  public constructor(
    private promptUpdateService: PromptUpdateService
  ) {
    this.hasUpdate = false;
    this.closeUpdate = false;
  }

  public ngOnInit(): void {
    this.updateService();
  }

  public updateService(): void {
    this.promptUpdateService.promptUpdate().subscribe((): void => {
      this.hasUpdate = true;
    });
  }

  public reload(): void {
    this.promptUpdateService.prompt();
  }

  public close() {
    this.closeUpdate = true;
  }

  public ngOnDestroy(): void {
  }
}
