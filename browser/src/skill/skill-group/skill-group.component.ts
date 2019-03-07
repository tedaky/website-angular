import {
  Component,
  Input
} from '@angular/core';

import { SkillGroup } from '../../../../types/skill';

@Component({
  selector: 'app-skill-group-component',
  templateUrl: './skill-group.component.pug',
  styleUrls: ['./skill-group.component.sass']
})
export class SkillGroupComponent {

  @Input() private _skillGroup: SkillGroup;

  public get skillGroup(): SkillGroup {
    return this._skillGroup;
  }

  public set skillGroup(val: SkillGroup) {
    this._skillGroup = val;
  }

}
