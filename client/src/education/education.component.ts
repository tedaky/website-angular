import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { distinctUntilChanged } from 'rxjs/operators';

import { EducationService } from './education.service';
import {
  Education,
  Response
} from '../../../types/education';

@Component({
  selector: 'app-education-component',
  templateUrl: './education.component.html',
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
      .pipe<Response>(distinctUntilChanged<Response>())
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
    const date = new Date();
    const string = 'loading';
    this.education = this.education || [{
      education_order: 0,
      education_degree: string,
      education_field: string,
      education_cgpa: 0,
      school_name: string,
      school_link: string,
      school_logo: string,
      education_start_date: date,
      education_end_date: date,
      education_modified_at: date,
      school_modified_at: date
    }];
  }

  public ngOnDestroy(): void {
    if (this.educationServiceSub) {
      this.educationServiceSub.unsubscribe();
    }
  }
}
