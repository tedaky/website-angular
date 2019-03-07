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

import { SkillModule } from '../skill/skill.module';
import { MainService } from './main.service';

import {
  Message,
  Response
} from '../../../types/message';

const messages: Array<Message> = [{
  message_id: 1,
  message_description: 'Api Works!',
  message_modified_at: new Date()
}];

const response: Response = {
  response: messages
};

describe('MainService', (): void => {
  let injector: TestBed;
  let service: MainService;
  let httpMock: HttpTestingController;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SkillModule
      ],
      providers: [
        MainService
      ]
    });
  }));

  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(MainService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', (): void => {
    expect<MainService>(service).toBeTruthy();
  });

  describe('get #message', (): void => {
    it('should return an Observable<Message>', (): void => {
      const mock: Response = response;

      service.message.subscribe((res: Response): void => {
        expect<Array<Message>>(res.response).toBeDefined();
        expect<Array<Message>>(res.response).toEqual(messages);
      });

      const req: TestRequest = httpMock.expectOne(`${environment.origin}api/messages`);
      expect<string>(req.request.method).toBe('GET');
      req.flush(mock);
    });
  });
});
