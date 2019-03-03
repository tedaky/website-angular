import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { EducationService } from './education.service';
import {
  Education,
  Response
} from '../../../types/education';

@Component({
  selector: 'app-education-component',
  templateUrl: './education.component.pug',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit, OnDestroy {

  /**
   * The Education
   */
  public education: Array<Education>;

  /**
   * Subscribe to the Education Service
   */
  private educationServiceSub: Subscription;

  public constructor(
    private educationService: EducationService
  ) { }

  public ngOnInit(): void {
    this.setEducation();
    this.getEducation();
  }

  /**
   * Create subscription for the Education
   */
  private getEducation(): void {
    this.educationServiceSub = this.educationService.getEducation()
      .subscribe(
        (res: Response): void => {
          this.education = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  /**
   * Set the Education by default
   */
  private setEducation(): void {
    const string = 'loading';
    const date = new Date();
    this.education = this.education || [];
  }

  public ngOnDestroy(): void {
    if (this.educationServiceSub) {
      this.educationServiceSub.unsubscribe();
    }
  }
}
