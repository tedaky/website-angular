import {
  async,
  TestBed,
  getTestBed
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import {
  MainService,
  Message
} from './main.service';
import { environment } from '../../../environments/environment';

const message: Message = {
  message_id: 1,
  message_description: 'Api Works!'
};

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getMessage', (): void => {
    it('should return an Observable<Message>', (): void => {
      const mock: Message = message;

      service.getMessage().subscribe((res) => {
        expect(res).toBeDefined();
        expect(res).toEqual(message);
      });

      const req = httpMock.expectOne(`${environment.origin}api/message`);
      expect(req.request.method).toBe('GET');
      req.flush(mock);
    });
  });
});
