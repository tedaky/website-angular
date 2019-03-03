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

import { ExperienceComponent } from './experience.component';
import { ExperienceService } from './experience.service';
import {
  Experience,
  Response
} from '../../../types/experience';

const date = new Date();
const string = 'loaded';
const experience: Array<Experience> = [{
  experience_order: 0,
  experience_description: string,
  position_title: string,
  company_name: string,
  company_link: string,
  company_logo: string,
  company_description: string,
  experience_start_date: date,
  experience_end_date: date,
  experience_modified_at: date,
  company_modified_at: date,
  position_modified_at: date
}];

const response: Response = {
  response: experience
};

describe('ExperienceComponent', (): void => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let es: any;

  describe('Before API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          ExperienceComponent
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<ExperienceComponent>(ExperienceComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create ExperienceComponent', (): void => {
      expect<ExperienceComponent>(component).toBeDefined();
    });

    it('should set default experience to an empty Array', (): void => {
      expect<number>(component.experience.length).toBe(0);
    });
  });

  describe('After API Request Success', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          ExperienceComponent
        ],
        providers: [
          ExperienceService
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<ExperienceComponent>(ExperienceComponent);
      component = fixture.componentInstance;
      es = TestBed.get(ExperienceService);
      spyOn(es, 'getExperiences').and.returnValue(of(response));
      fixture.detectChanges();
    });

    it('should set the experience_description', (): void => {
      component.ngOnInit();
      expect<string>(component.experience[0].experience_description).not.toEqual('loading');
    });
  });

  describe('After API Request Fail', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          ExperienceComponent
        ],
        providers: [
          ExperienceService
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<ExperienceComponent>(ExperienceComponent);
      component = fixture.componentInstance;
      es = TestBed.get(ExperienceService);
      spyOn(es, 'getExperiences').and.returnValue(throwError('Test Error'));
      fixture.detectChanges();
    });

    it('should fail', (): void => {
      component.ngOnInit();
      expect<ExperienceComponent>(component).toBeDefined();
    });
  });
});
