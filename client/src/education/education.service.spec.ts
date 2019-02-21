import {
  async,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';

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

describe('EducationService', (): void => {
  let injector: TestBed;
  let service: EducationService;
  let httpMock: HttpTestingController;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        EducationService
      ]
    });
  }));

  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(EducationService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', (): void => {
    expect<EducationService>(service).toBeTruthy();
  });

  describe('#getEducation', (): void => {
    it('should return an Observable<Response>', (): void => {
      const mock: Response = response;

      service.getEducation().subscribe((res: Response): void => {
        expect<Array<Education>>(res.response).toBeDefined();
        expect<Array<Education>>(res.response).toEqual(education);
      });

      const req: TestRequest = httpMock.expectOne(`${environment.origin}api/education`);
      expect<string>(req.request.method).toBe('GET');
      req.flush(mock);
    });
  });
});
