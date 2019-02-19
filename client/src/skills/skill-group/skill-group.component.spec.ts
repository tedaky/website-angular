import {
  Component,
  ViewChild
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';

import { SkillGroupComponent } from './skill-group.component';
import { SkillGroup } from '../../../../types/skill';

const skill_group: SkillGroup = {
  skill_group_id: 0,
  skill_group_name: 'loaded',
  skill_group_order: 0,
  skill_group_modified_at: new Date()
};

@Component({
  selector: 'app-test-host-component',
  template: '<app-skill-group-component></app-skill-group-component>'
})
class TestHostComponent {
  @ViewChild(SkillGroupComponent)
  public skillGroupComponent: SkillGroupComponent;
}

describe('SkillGroupComponent', (): void => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        SkillGroupComponent
      ]
    }).compileComponents();
  }));

  beforeEach((): void => {
    testHostFixture = TestBed.createComponent<TestHostComponent>(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });

  it(`should set default skill_group_name = 'loaded'`, (): void => {
    testHostComponent.skillGroupComponent.skillGroup = skill_group;
    testHostFixture.detectChanges();
    expect<string>(testHostComponent.skillGroupComponent.skillGroup.skill_group_name).toEqual('loaded');
  });
});
