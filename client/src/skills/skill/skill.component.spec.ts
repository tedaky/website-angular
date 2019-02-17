import {
  Component,
  ViewChild
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';

import { SkillComponent } from './skill.component';
import { ISkill } from '../../../../types/skill';

const skill: ISkill = {
  skill_id: 0,
  skill_name: 'loaded',
  skill_level: 0,
  skill_order: 0,
  skill_skill_group_id: 0,
  skill_modified_at: new Date()
};

describe('SkillComponent', (): void => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        SkillComponent
      ]
    }).compileComponents();
  }));

  beforeEach((): void => {
    testHostFixture = TestBed.createComponent<TestHostComponent>(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });

  it(`should set default skill_name = 'loaded'`, (): void => {
    testHostComponent.skillComponent.skill = skill;
    testHostFixture.detectChanges();
    expect<string>(testHostComponent.skillComponent.skill.skill_name).toEqual('loaded');
  });

  @Component({
    selector: 'app-test-host-component',
    template: '<app-skill-component></app-skill-component>'
  })
  class TestHostComponent {
    @ViewChild(SkillComponent)
    public skillComponent: SkillComponent;
  }
});
