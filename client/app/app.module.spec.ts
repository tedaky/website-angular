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

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

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

      fixture = TestBed.createComponent(AppComponent);
    }));

    it('should create the app on browser', (): void => {
      const app: any = fixture.componentInstance;
      expect(app).toBeTruthy();
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

      fixture = TestBed.createComponent(AppComponent);
    }));

    it('should create the app on server', (): void => {
      const app: any = fixture.componentInstance;
      expect(app).toBeTruthy();
    });
  });
});
