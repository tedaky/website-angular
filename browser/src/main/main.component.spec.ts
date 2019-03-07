import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  of,
  throwError
} from 'rxjs';

import { MainComponent } from './main.component';
import { MainService } from './main.service';
import { SkillModule } from '../skill/skill.module';
import {
  Message,
  Response
} from '../../../types/message';
import { ExperienceModule } from '../experience/experience.module';
import { EducationModule } from '../education/education.module';
import { VersionModule } from '../version/version.module';

const message: Array<Message> = [{
  message_id: 1,
  message_description: 'Api Works!',
  message_modified_at: new Date()
}];

const response: Response = {
  response: message
};

describe('MainComponent', (): void => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let ms: any;

  describe('Before API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          SkillModule,
          ExperienceModule,
          EducationModule,
          VersionModule
        ],
        declarations: [
          MainComponent
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<MainComponent>(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create MainComponent', (): void => {
      expect<MainComponent>(component).toBeDefined();
    });

    it(`should have a title`, (): void => {
      expect<number>(component.title.length).toBeGreaterThan(0);
    });

    it('should set default message to an empty Array', (): void => {
      expect<number>(component.message.length).toBe(0);
    });
  });

  describe('After API Request Success', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          SkillModule,
          ExperienceModule,
          EducationModule,
          VersionModule
        ],
        declarations: [
          MainComponent
        ],
        providers: [
          MainService
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<MainComponent>(MainComponent);
      component = fixture.componentInstance;
      ms = TestBed.get(MainService);
      spyOnProperty(ms, 'message').and.returnValue(of(response));
      fixture.detectChanges();
    });

    it('should set the message_description', (): void => {
      component.ngOnInit();
      expect<string>(component.message[0].message_description).not.toEqual('loading');
    });
  });

  describe('After API Request Fail', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          SkillModule,
          ExperienceModule,
          EducationModule,
          VersionModule
        ],
        declarations: [
          MainComponent
        ],
        providers: [
          MainService
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<MainComponent>(MainComponent);
      component = fixture.componentInstance;
      ms = TestBed.get(MainService);
      spyOnProperty(ms, 'message').and.returnValue(throwError('Test Error'));
      fixture.detectChanges();
    });

    it('should fail', (): void => {
      component.ngOnInit();
      expect<MainComponent>(component).toBeDefined();
    });
  });
});
