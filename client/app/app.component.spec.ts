import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService, Message } from './app.service';
import { message } from './app.component.mock';

class FakeAppService {
  public getMessage(): Observable<Message> {
    return of(message);
  }
}

describe('AppComponent', (): void => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  describe('Before API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          AppComponent
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create the app', (): void => {
      expect(component).toBeDefined();
    });

    it(`should have a title = 'angular-website'`, (): void => {
      expect(component.title).toEqual('angular-website');
    });

    it(`should set default message_description = 'loading'`, (): void => {
      expect(component.message.message_description).toEqual('loading');
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
          AppComponent
        ],
        providers: [
          {
            provide: AppService,
            useClass: FakeAppService
          }
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should set the message_description', (): void => {
      component.ngOnInit();
      expect(component.message.message_description).not.toEqual('loading');
    });
  });
});
