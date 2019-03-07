import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { SkillService } from './skill.service';
import {
  SkillGroupItem,
  Response
} from '../../../types/skill';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill.component.pug',
  styleUrls: ['./skill.component.sass']
})
export class SkillComponent implements OnInit, OnDestroy {

  /**
   * Skill Holder
   */
  public _skill: Array<SkillGroupItem>;
  /**
   * Get the skill
   */
  public get skill() {
    return this._skill;
  }
  /**
   * Set the skill
   */
  public set skill(val: Array<SkillGroupItem>) {
    this._skill = val;
  }

  /**
   * Subscribe to the Skills Service
   */
  private skillServiceSub: Subscription;

  public constructor(
    private skillService: SkillService
  ) { }

  public ngOnInit(): void {
    this.skill = this.skill || [];
    this.subToSkill();
  }

  /**
   * Create subscription for the Skills
   */
  private subToSkill(): void {
    this.skillServiceSub = this.skillService.skill
      .subscribe(
        (res: Response): void => {
          this.skill = res.response;
        },
        (err: any): any => {
          console.log('An error occurred: ', err);
        });
  }

  public ngOnDestroy(): void {
    if (this.skillServiceSub) {
      this.skillServiceSub.unsubscribe();
    }
  }
}
