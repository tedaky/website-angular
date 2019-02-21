import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Observable,
  of
} from 'rxjs';

import { VersionComponent } from './version.component';
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

class FakeAppService {
  public getVersions(): Observable<Response> {
    return of(response);
  }
}

describe('VersionComponent', (): void => {
  let component: VersionComponent;
  let fixture: ComponentFixture<VersionComponent>;

  describe('Before API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          VersionComponent
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<VersionComponent>(VersionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create the app', (): void => {
      expect<VersionComponent>(component).toBeDefined();
    });

    it(`should set default version_name = 'loading'`, (): void => {
      expect<string>(component.version[0].version_name).toEqual('loading');
    });
  });

  describe('After API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          VersionComponent
        ],
        providers: [
          {
            provide: VersionService,
            useClass: FakeAppService
          }
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<VersionComponent>(VersionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should set the version_name', (): void => {
      component.ngOnInit();
      expect<string>(component.version[0].version_name).not.toEqual('loading');
    });
  });
});
