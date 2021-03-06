import {
  TestBed,
  async,
  ComponentFixture
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  PLATFORM_ID
} from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { LoadChildren } from '@angular/router';

import { AppComponent } from './app.component';
import {
  AppModule,
  lazyImports,
  browserImports
} from './app.module';
import {
  appRoutes,
  loadMainModule
} from './app-routing.module';

describe('AppModule', (): void => {

  describe('Browser', (): void => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          AppModule
        ],
        providers: [
          {
            provide: PLATFORM_ID,
            useValue: 'browser'
          },
          {
            provide: APP_BASE_HREF,
            useValue: '/'
          }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent<AppComponent>(AppComponent);
    }));

    it('should create the app on browser', (): void => {
      const app: AppComponent = fixture.componentInstance;
      expect<AppComponent>(app).toBeTruthy();
    });

    it('#lazyImports dev', (): void => {
      expect<number>(lazyImports(false).length).toBeGreaterThan(0);
    });

    it('#lazyImports production', (): void => {
      expect<number>(lazyImports(true).length).toBe(0);
    });

    it('#browserImports browser', (): void => {
      expect<number>(browserImports(false).length).toBeGreaterThan(0);
    });

    it('#browserImports server', (): void => {
      expect<number>(browserImports(true).length).toBe(0);
    });

    it('#appRoutes dev', (): void => {
      expect(appRoutes(false)[0].component).toBeDefined();
    });

    it('#appRoutes production', (): void => {
      expect<LoadChildren>(appRoutes(true)[0].loadChildren).toBeDefined();
    });

    it('#loadMainModule dev', (): void => {
      expect(loadMainModule(false)).toBeUndefined();
    });

    it('#loadMainModule production', (): void => {
      expect(loadMainModule(true)).toBeDefined();
    });
  });

  describe('Server', (): void => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          AppModule
        ],
        providers: [
          {
            provide: PLATFORM_ID,
            useValue: 'server'
          },
          {
            provide: APP_BASE_HREF,
            useValue: '/'
          }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent<AppComponent>(AppComponent);
    }));

    it('should create the app on server', (): void => {
      const app: AppComponent = fixture.componentInstance;
      expect<AppComponent>(app).toBeTruthy();
    });
  });
});
