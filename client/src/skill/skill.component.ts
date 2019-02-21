import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { distinctUntilChanged } from 'rxjs/operators';

import { SkillService } from './skill.service';
import {
  SkillGroupItem,
  Response
} from '../../../types/skill';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.sass']
})
export class SkillComponent implements OnInit, OnDestroy {

  /**
   * The Skills
   */
  public skill: Array<SkillGroupItem>;

  /**
   * Subscribe to the Skills Service
   */
  private skillServiceSub: Subscription;

  public constructor(
    private skillService: SkillService
  ) { }

  public ngOnInit(): void {
    this.setSkills();
    this.getSkills();
  }

  /**
   * Create subscription for the Skills
   */
  private getSkills(): void {
    this.skillServiceSub = this.skillService.getSkills()
      .pipe<Response>(distinctUntilChanged<Response>())
      .subscribe(
        (res: Response): void => {
          this.skill = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  /**
   * Set the Skills by default
   */
  private setSkills(): void {
    this.skill = this.skill || [{
      skill_group: {
        skill_group_id: 0,
        skill_group_name: 'loading',
        skill_group_order: 0,
        skill_group_modified_at: new Date()
      },
      skill_item: [{
        skill_item_id: 0,
        skill_item_name: 'loading',
        skill_item_level: 0,
        skill_item_order: 0,
        skill_item_skill_group_id: 0,
        skill_item_modified_at: new Date()
      }]
    }];
  }

  public ngOnDestroy(): void {
    if (this.skillServiceSub) {
      this.skillServiceSub.unsubscribe();
    }
  }
}
