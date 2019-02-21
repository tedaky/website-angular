import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { distinctUntilChanged } from 'rxjs/operators';

import { VersionService } from './version.service';
import {
  Version,
  Response
} from '../../../types/version';

@Component({
  selector: 'app-version-component',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.sass']
})
export class VersionComponent implements OnInit, OnDestroy {

  /**
   * The Version
   */
  public version: Array<Version>;

  /**
   * Subscribe to the Version Service
   */
  private versionServiceSub: Subscription;

  public constructor(
    private versionService: VersionService
  ) { }

  public ngOnInit(): void {
    this.setVersions();
    this.getVersions();
  }

  /**
   * Create subscription for the Version
   */
  private getVersions(): void {
    this.versionServiceSub = this.versionService.getVersions()
      .pipe<Response>(distinctUntilChanged<Response>())
      .subscribe(
        (res: Response): void => {
          this.version = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  /**
   * Set the Version by default
   */
  private setVersions(): void {
    const date = new Date();
    const string = 'loading';
    this.version = this.version || [{
      version_name: string,
      version_image: string,
      version_link: string,
      version_order: 0,
      version_modified_at: date
    }];
  }

  public ngOnDestroy(): void {
    if (this.versionServiceSub) {
      this.versionServiceSub.unsubscribe();
    }
  }
}
