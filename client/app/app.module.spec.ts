import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PLATFORM_ID, APP_ID } from '@angular/core';

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
          }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
    }));

    it('should create the app on browser', (): void => {
      const app: any = fixture.debugElement.componentInstance;
      console.log(APP_ID);
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
          }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
    }));

    it('should create the app on server', (): void => {
      const app: any = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  });
});
