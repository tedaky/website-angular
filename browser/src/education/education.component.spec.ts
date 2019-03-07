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

import { EducationComponent } from './education.component';
import { EducationService } from './education.service';
import {
  Education,
  Response
} from '../../../types/education';

const date = new Date();
const string = 'loaded';
const education: Array<Education> = [{
  education_order: 0,
  education_degree: string,
  education_field: string,
  education_cgpa: 0,
  school_name: string,
  school_link: string,
  school_logo: string,
  education_start_date: date,
  education_end_date: date,
  education_modified_at: date,
  school_modified_at: date
}];

const response: Response = {
  response: education
};

describe('ExperienceComponent', (): void => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let es: any;

  describe('Before API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          EducationComponent
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<EducationComponent>(EducationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create EducationComponent', (): void => {
      expect<EducationComponent>(component).toBeDefined();
    });

    it('should set default education to an empty Array', (): void => {
      expect<number>(component.education.length).toBe(0);
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
          EducationComponent
        ],
        providers: [
          EducationService
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<EducationComponent>(EducationComponent);
      component = fixture.componentInstance;
      es = TestBed.get(EducationService);
      spyOnProperty(es, 'education').and.returnValue(of(response));
      fixture.detectChanges();
    });

    it('should set the education_degree', (): void => {
      component.ngOnInit();
      expect<string>(component.education[0].education_degree).not.toEqual('loading');
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
          EducationComponent
        ],
        providers: [
          EducationService
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<EducationComponent>(EducationComponent);
      component = fixture.componentInstance;
      es = TestBed.get(EducationService);
      spyOnProperty(es, 'education').and.returnValue(throwError('Test Error'));
      fixture.detectChanges();
    });

    it('should fail', (): void => {
      component.ngOnInit();
      expect<EducationComponent>(component).toBeDefined();
    });
  });
});
