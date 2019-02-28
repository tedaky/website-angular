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
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  /**
   * The Experiences
   */
  public experience: Array<Experience>;

  /**
   * Subscribe to the Message Service
   */
  private experienceServiceSub: Subscription;

  public constructor(
    private experienceService: ExperienceService
  ) { }

  public ngOnInit(): void {
    this.setExperiences();
    this.getExperiences();
  }

  /**
   * Create subscription for the Message
   */
  private getExperiences(): void {
    this.experienceServiceSub = this.experienceService.getExperiences()
      .subscribe(
        (res: Response): void => {
          this.experience = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  /**
   * Set the Message by default
   */
  private setExperiences(): void {
    this.experience = this.experience || [];
  }

  public ngOnDestroy(): void {
    if (this.experienceServiceSub) {
      this.experienceServiceSub.unsubscribe();
    }
  }
}
