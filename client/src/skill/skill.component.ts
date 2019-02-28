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
    this.skill = this.skill || [];
  }

  public ngOnDestroy(): void {
    if (this.skillServiceSub) {
      this.skillServiceSub.unsubscribe();
    }
  }
}
