import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PLATFORM_ID, APP_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppModule', () => {

  describe('Browser', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
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

    it('should create the app on browser', () => {
      const app = fixture.debugElement.componentInstance;
      console.log(APP_ID);
      expect(app).toBeTruthy();
    });
  });

  describe('Server', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
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

    it('should create the app on server', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  });
});
