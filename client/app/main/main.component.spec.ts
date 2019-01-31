import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { MainComponent } from './main.component';
import { MainService, Message } from './main.service';

class FakeAppService {
  public getMessage(): Observable<Message> {
    return of(message);
  }
}

const message: Message = {
  message_id: 1,
  message_description: 'Api Works!'
};

describe('MainComponent', (): void => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  describe('Before API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          MainComponent
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent(MainComponent);
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
          MainComponent
        ],
        providers: [
          {
            provide: MainService,
            useClass: FakeAppService
          }
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should set the message_description', (): void => {
      component.ngOnInit();
      expect(component.message.message_description).not.toEqual('loading');
    });
  });
});
