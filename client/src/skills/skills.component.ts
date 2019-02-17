import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { distinctUntilChanged } from 'rxjs/operators';

import { SkillsService } from './skills.service';
import {
  ISkillResponse,
  SkillResponse
} from '../../../types/skill';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit, OnDestroy {

  /**
   * The Skills
   */
  public skills: ISkillResponse[];

  /**
   * Subscribe to the Skills Service
   */
  private skillsServiceSub: Subscription;

  public constructor(
    private skillsService: SkillsService
  ) { }

  public ngOnInit(): void {
    this.setSkills();
    this.getSkills();
  }

  /**
   * Create subscription for the Skills
   */
  private getSkills(): void {
    this.skillsServiceSub = this.skillsService.getSkills()
      .pipe<SkillResponse>(distinctUntilChanged<SkillResponse>())
      .subscribe(
        (res: SkillResponse): void => {
          this.skills = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  /**
   * Set the Skills by default
   */
  private setSkills(): void {
    this.skills = this.skills || [{
      skill_group: {
        skill_group_id: 0,
        skill_group_name: 'loading',
        skill_group_order: 0,
        skill_group_modified_at: new Date()
      },
      skill: [{
        skill_id: 0,
        skill_name: 'loading',
        skill_level: 0,
        skill_order: 0,
        skill_skill_group_id: 0,
        skill_modified_at: new Date()
      }]
    }];
  }

  public ngOnDestroy(): void {
    if (this.skillsServiceSub) {
      this.skillsServiceSub.unsubscribe();
    }
  }
}
