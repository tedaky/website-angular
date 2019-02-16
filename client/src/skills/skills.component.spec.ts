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

import { SkillsComponent } from './skills.component';
import { SkillsService } from './skills.service';
import {
  ISkillResponse,
  SkillResponse
} from '../../../types/skill';

const skills: ISkillResponse[] = [{
  skill_group: {
    skill_group_id: 0,
    skill_group_name: 'loaded',
    skill_group_order: 0,
    skill_group_modified_at: new Date()
  },
  skill: [{
    skill_id: 0,
    skill_name: 'loaded',
    skill_level: 0,
    skill_order: 0,
    skill_skill_group_id: 0,
    skill_modified_at: new Date()
  }]
}];

const skillsResponse: SkillResponse = {
  response: skills
};

class FakeAppService {
  public getSkills(): Observable<SkillResponse> {
    return of(skillsResponse);
  }
}

describe('MainComponent', (): void => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  describe('Before API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          SkillsComponent
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<SkillsComponent>(SkillsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create the app', (): void => {
      expect<SkillsComponent>(component).toBeDefined();
    });

    it(`should set default skill_group_name = 'loading'`, (): void => {
      expect<string>(component.skills[0].skill_group.skill_group_name).toEqual('loading');
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
          SkillsComponent
        ],
        providers: [
          {
            provide: SkillsService,
            useClass: FakeAppService
          }
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<SkillsComponent>(SkillsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should set the skill_group_name', (): void => {
      component.ngOnInit();
      expect<string>(component.skills[0].skill_group.skill_group_name).not.toEqual('loading');
    });
  });
});