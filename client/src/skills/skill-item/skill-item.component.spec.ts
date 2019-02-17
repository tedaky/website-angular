import {
  Component,
  ViewChild
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';

import { SkillItemComponent } from './skill-item.component';
import { ISkillItem } from '../../../../types/skill';

const skillItem: ISkillItem = {
  skill_item_id: 0,
  skill_item_name: 'loaded',
  skill_item_level: 0,
  skill_item_order: 0,
  skill_item_skill_group_id: 0,
  skill_item_modified_at: new Date()
};

@Component({
  selector: 'app-test-host-component',
  template: '<app-skill-item-component></app-skill-item-component>'
})
class TestHostComponent {
  @ViewChild(SkillItemComponent)
  public skillItemComponent: SkillItemComponent;
}

describe('SkillItemComponent', (): void => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        SkillItemComponent
      ]
    }).compileComponents();
  }));

  beforeEach((): void => {
    testHostFixture = TestBed.createComponent<TestHostComponent>(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });

  it(`should set default skill_item_name = 'loaded'`, (): void => {
    testHostComponent.skillItemComponent.skillItem = skillItem;
    testHostFixture.detectChanges();
    expect<string>(testHostComponent.skillItemComponent.skillItem.skill_item_name).toEqual('loaded');
  });
});
