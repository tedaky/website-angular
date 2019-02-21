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

class FakeAppService {
  public getEducation(): Observable<Response> {
    return of(response);
  }
}

describe('ExperienceComponent', (): void => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

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

    it('should create the app', (): void => {
      expect<EducationComponent>(component).toBeDefined();
    });

    it(`should set default education_degree = 'loading'`, (): void => {
      expect<string>(component.education[0].education_degree).toEqual('loading');
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
          EducationComponent
        ],
        providers: [
          {
            provide: EducationService,
            useClass: FakeAppService
          }
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<EducationComponent>(EducationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should set the education_degree', (): void => {
      component.ngOnInit();
      expect<string>(component.education[0].education_degree).not.toEqual('loading');
    });
  });
});
