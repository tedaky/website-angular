import {
  Component,
  Input
} from '@angular/core';

import { ISkillItem } from '../../../../types/skill';

@Component({
  selector: 'app-skill-item-component',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.sass']
})
export class SkillItemComponent {

  @Input() public skillItem: ISkillItem;

}
