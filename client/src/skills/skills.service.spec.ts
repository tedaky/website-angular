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

describe('MainService', (): void => {
  let injector: TestBed;
  let service: SkillsService;
  let httpMock: HttpTestingController;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SkillsService
      ]
    });
  }));

  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(SkillsService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', (): void => {
    expect<SkillsService>(service).toBeTruthy();
  });

  describe('#getSkills', (): void => {
    it('should return an Observable<Message>', (): void => {
      const mock: SkillResponse = skillsResponse;

      service.getSkills().subscribe((res: SkillResponse): void => {
        expect<ISkillResponse[]>(res.response).toBeDefined();
        expect<ISkillResponse[]>(res.response).toEqual(skills);
      });

      const req: TestRequest = httpMock.expectOne(`${environment.origin}api/skills`);
      expect<string>(req.request.method).toBe('GET');
      req.flush(mock);
    });
  });
});
