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

import { VersionService } from './version.service';

import {
  Version,
  Response
} from '../../../types/version';

const date = new Date();
const string = 'loaded';
const version: Array<Version> = [{
  version_name: string,
  version_image: string,
  version_link: string,
  version_order: 0,
  version_modified_at: date
}];

const response: Response = {
  response: version
};

describe('VersionService', (): void => {
  let injector: TestBed;
  let service: VersionService;
  let httpMock: HttpTestingController;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        VersionService
      ]
    });
  }));

  beforeEach((): void => {
    injector = getTestBed();
    service = injector.get(VersionService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', (): void => {
    expect<VersionService>(service).toBeTruthy();
  });

  describe('get #version', (): void => {
    it('should return an Observable<Response>', (): void => {
      const mock: Response = response;

      service.version.subscribe((res: Response): void => {
        expect<Array<Version>>(res.response).toBeDefined();
        expect<Array<Version>>(res.response).toEqual(version);
      });

      const req: TestRequest = httpMock.expectOne(`${environment.origin}api/versions`);
      expect<string>(req.request.method).toBe('GET');
      req.flush(mock);
    });
  });
});
