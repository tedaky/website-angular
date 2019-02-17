import {
  Component,
  Input
} from '@angular/core';

import { ISkill } from '../../../../types/skill';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.sass']
})
export class SkillComponent {

  @Input() public skill: ISkill;

}
