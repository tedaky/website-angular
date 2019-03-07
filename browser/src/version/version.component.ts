import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { VersionService } from './version.service';
import {
  Version,
  Response
} from '../../../types/version';

@Component({
  selector: 'app-version-component',
  templateUrl: './version.component.pug',
  styleUrls: ['./version.component.sass']
})
export class VersionComponent implements OnInit, OnDestroy {

  /**
   * Version Holder
   */
  private _version: Array<Version>;
  /**
   * Get the version
   */
  public get version() {
    return this._version;
  }
  /**
   * Set the version
   */
  public set version(val: Array<Version>) {
    this._version = val;
  }

  /**
   * Subscribe to the Version Service
   */
  private versionServiceSub: Subscription;

  public constructor(
    private versionService: VersionService
  ) { }

  public ngOnInit(): void {
    this.version = this.version || [];
    this.subToVersion();
  }

  /**
   * Create subscription for the Version
   */
  private subToVersion(): void {
    this.versionServiceSub = this.versionService.version
      .subscribe(
        (res: Response): void => {
          this.version = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  public ngOnDestroy(): void {
    if (this.versionServiceSub) {
      this.versionServiceSub.unsubscribe();
    }
  }
}
