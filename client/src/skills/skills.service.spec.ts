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
  SkillGroupItem,
  Response
} from '../../../types/skill';

const skills: Array<SkillGroupItem> = [{
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
  response: skills
};

describe('SkillsService', (): void => {
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
      const mock: Response = response;

      service.getSkills().subscribe((res: Response): void => {
        expect<Array<SkillGroupItem>>(res.response).toBeDefined();
        expect<Array<SkillGroupItem>>(res.response).toEqual(skills);
      });

      const req: TestRequest = httpMock.expectOne(`${environment.origin}api/skills`);
      expect<string>(req.request.method).toBe('GET');
      req.flush(mock);
    });
  });
});
