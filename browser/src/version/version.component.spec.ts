import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  of,
  throwError
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

describe('VersionComponent', (): void => {
  let component: VersionComponent;
  let fixture: ComponentFixture<VersionComponent>;
  let vs: any;

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

    it('should create VersionComponent', (): void => {
      expect<VersionComponent>(component).toBeDefined();
    });

    it('should set default version to an empty Array', (): void => {
      expect<number>(component.version.length).toEqual(0);
    });
  });

  describe('After API Request Success', (): void => {
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
          VersionService
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<VersionComponent>(VersionComponent);
      component = fixture.componentInstance;
      vs = TestBed.get(VersionService);
      spyOn(vs, 'getVersions').and.returnValue(of(response));
      fixture.detectChanges();
    });

    it('should set the version_name', (): void => {
      component.ngOnInit();
      expect<string>(component.version[0].version_name).not.toEqual('loading');
    });
  });

  describe('After API Request Fail', (): void => {
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
          VersionService
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<VersionComponent>(VersionComponent);
      component = fixture.componentInstance;
      vs = TestBed.get(VersionService);
      spyOn(vs, 'getVersions').and.returnValue(throwError('Test Error'));
      fixture.detectChanges();
    });

    it('should fail', (): void => {
      component.ngOnInit();
      expect<VersionComponent>(component).toBeDefined();
    });
  });
});
