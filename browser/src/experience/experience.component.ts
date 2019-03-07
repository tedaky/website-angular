import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { ExperienceService } from './experience.service';
import {
  Experience,
  Response
} from '../../../types/experience';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience.component.pug',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  /**
   * Experience Holder
   */
  private _experience: Array<Experience>;
  /**
   * Get the experience
   */
  public get experience(): Array<Experience> {
    return this._experience;
  }
  /**
   * Set the experience
   */
  public set experience(val: Array<Experience>) {
    this._experience = val;
  }

  /**
   * Subscribe to the Experience Service
   */
  private experienceServiceSub: Subscription;

  public constructor(
    private experienceService: ExperienceService
  ) { }

  public ngOnInit(): void {
    this.experience = this.experience || [];
    this.subToExperience();
  }

  /**
   * Create subscription for the Experience
   */
  private subToExperience(): void {
    this.experienceServiceSub = this.experienceService.experience
      .subscribe(
        (res: Response): void => {
          this.experience = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  public ngOnDestroy(): void {
    if (this.experienceServiceSub) {
      this.experienceServiceSub.unsubscribe();
    }
  }
}
