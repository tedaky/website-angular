import {
  Component,
  Input
} from '@angular/core';

import { SkillItem } from '../../../../types/skill';

@Component({
  selector: 'app-skill-item-component',
  templateUrl: './skill-item.component.pug',
  styleUrls: ['./skill-item.component.sass']
})
export class SkillItemComponent {

  @Input() private _skillItem: SkillItem;

  public get skillItem(): SkillItem {
    return this._skillItem;
  }

  public set skillItem(val: SkillItem) {
    this._skillItem = val;
  }

}
