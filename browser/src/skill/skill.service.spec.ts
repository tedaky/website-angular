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

import { SkillService } from './skill.service';
import {
  SkillGroupItem,
  Response
} from '../../../types/skill';

const skill: Array<SkillGroupItem> = [{
  skill_group: {
    skill_group_id: 0,
    skill_group_name: 'loaded',
    skill_group_order: 0,
    skill_group_modified_at: new Date()
  },
  skill_item: [{
    skill_item_id: 0,
    skill_item_name: 'loaded',
    skill_item_level: 0,
    skill_item_order: 0,
    skill_item_skill_group_id: 0,
    skill_item_modified_at: new Date()
  }]
}];

const response: Response = {
  response: skill
};

describe('SkillService', (): void => {
  let injector: TestBed;
  let service: SkillService;
  let httpMock: HttpTestingController;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SkillService
      ]
    });
  }));

  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(SkillService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', (): void => {
    expect<SkillService>(service).toBeTruthy();
  });

  describe('get #skill', (): void => {
    it('should return an Observable<Message>', (): void => {
      const mock: Response = response;

      service.skill.subscribe((res: Response): void => {
        expect<Array<SkillGroupItem>>(res.response).toBeDefined();
        expect<Array<SkillGroupItem>>(res.response).toEqual(skill);
      });

      const req: TestRequest = httpMock.expectOne(`${environment.origin}api/skills`);
      expect<string>(req.request.method).toBe('GET');
      req.flush(mock);
    });
  });
});
