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

describe('ExperienceService', (): void => {
  let injector: TestBed;
  let service: ExperienceService;
  let httpMock: HttpTestingController;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ExperienceService
      ]
    });
  }));

  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(ExperienceService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', (): void => {
    expect<ExperienceService>(service).toBeTruthy();
  });

  describe('#getExperiences', (): void => {
    it('should return an Observable<Response>', (): void => {
      const mock: Response = response;

      service.getExperiences().subscribe((res: Response): void => {
        expect<Array<Experience>>(res.response).toBeDefined();
        expect<Array<Experience>>(res.response).toEqual(experience);
      });

      const req: TestRequest = httpMock.expectOne(`${environment.origin}api/experiences`);
      expect<string>(req.request.method).toBe('GET');
      req.flush(mock);
    });
  });
});
