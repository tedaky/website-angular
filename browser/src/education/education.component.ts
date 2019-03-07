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
   * Education Holder
   */
  private _education: Array<Education>;
  /**
   * Get the education
   */
  public get education(): Array<Education> {
    return this._education;
  }
  /**
   * Set the version
   */
  public set education(val: Array<Education>) {
    this._education = val;
  }

  /**
   * Subscribe to the Education Service
   */
  private educationServiceSub: Subscription;

  public constructor(
    private educationService: EducationService
  ) { }

  public ngOnInit(): void {
    this.education = this.education || [];
    this.subToEducation();
  }

  /**
   * Create subscription for the Education
   */
  private subToEducation(): void {
    this.educationServiceSub = this.educationService.education
      .subscribe(
        (res: Response): void => {
          this.education = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  public ngOnDestroy(): void {
    if (this.educationServiceSub) {
      this.educationServiceSub.unsubscribe();
    }
  }
}
