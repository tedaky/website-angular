import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Observable,
  of
} from 'rxjs';

import { SkillComponent } from './skill.component';
import { SkillGroupComponent } from './skill-group/skill-group.component';
import { SkillItemComponent } from './skill-item/skill-item.component';
import { SkillService } from './skill.service';
import {
  SkillGroupItem,
  Response
} from '../../../types/skill';

const skill: Array<SkillGroupItem> = [{
  skill_group: {
    skill_group_id: 0,
    skill_group_name: 'loaded',
    skill_group_order: 0,
    skill_group_modified_at: new Date()
  },
  skill_item: [{
    skill_item_id: 0,
    skill_item_name: 'loaded',
    skill_item_level: 0,
    skill_item_order: 0,
    skill_item_skill_group_id: 0,
    skill_item_modified_at: new Date()
  }]
}];

const response: Response = {
  response: skill
};

class FakeAppService {
  public getSkills(): Observable<Response> {
    return of(response);
  }
}

describe('SkillComponent', (): void => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  describe('Before API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          SkillComponent,
          SkillGroupComponent,
          SkillItemComponent
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<SkillComponent>(SkillComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create the app', (): void => {
      expect<SkillComponent>(component).toBeDefined();
    });

    it(`should set default skill_group_name = 'loading'`, (): void => {
      expect<string>(component.skill[0].skill_group.skill_group_name).toEqual('loading');
    });
  });

  describe('After API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          SkillComponent,
          SkillGroupComponent,
          SkillItemComponent
        ],
        providers: [
          {
            provide: SkillService,
            useClass: FakeAppService
          }
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<SkillComponent>(SkillComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should set the skill_group_name', (): void => {
      component.ngOnInit();
      expect<string>(component.skill[0].skill_group.skill_group_name).not.toEqual('loading');
    });
  });
});
