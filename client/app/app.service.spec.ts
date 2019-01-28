import {
  TestBed,
  getTestBed
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import {
  AppService,
  Message
} from './app.service';
import { message } from './app.component.mock';
import { environment } from '../../environments/environment';

describe('AppService', (): void => {
  let injector: TestBed;
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AppService
      ]
    });

    injector = getTestBed();
    service = injector.get(AppService);
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
