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

import {
  MainService,
  Message,
  MessagesResponse
} from './main.service';
import { environment } from '../../../environments/environment';

const messages: Message[] = [{
  message_id: 1,
  message_description: 'Api Works!'
}];

describe('MainService', (): void => {
  let injector: TestBed;
  let service: MainService;
  let httpMock: HttpTestingController;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
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

  describe('#getMessage', (): void => {
    it('should return an Observable<Message>', (): void => {
      const mock: Message[] = messages;

      service.getMessage().subscribe((res: MessagesResponse): void => {
        expect<Message[]>(res.message).toBeDefined();
        expect<Message[]>(res.message).toEqual(messages);
      });

      const req: TestRequest = httpMock.expectOne(`${environment.origin}api/message`);
      expect<string>(req.request.method).toBe('GET');
      req.flush(mock);
    });
  });
});
