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

import { MainComponent } from './main.component';
import { MainService } from './main.service';
import { SkillModule } from '../skill/skill.module';
import {
  Message,
  Response
} from '../../../types/message';

const message: Array<Message> = [{
  message_id: 1,
  message_description: 'Api Works!',
  message_modified_at: new Date()
}];

const response: Response = {
  response: message
};

class FakeAppService {
  public getMessages(): Observable<Response> {
    return of(response);
  }
}

describe('MainComponent', (): void => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  describe('Before API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          SkillModule
        ],
        declarations: [
          MainComponent
        ]
      }).compileComponents();
    }));

    beforeEach((): void => {
      fixture = TestBed.createComponent<MainComponent>(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create the app', (): void => {
      expect<MainComponent>(component).toBeDefined();
    });

    it(`should have a title`, (): void => {
      expect<number>(component.title.length).toBeGreaterThan(0);
    });

    it(`should set default message_description = 'loading'`, (): void => {
      expect<string>(component.message[0].message_description).toEqual('loading');
    });
  });

  describe('After API Request', (): void => {
    beforeEach(async((): void => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          SkillModule
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
      fixture = TestBed.createComponent<MainComponent>(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should set the message_description', (): void => {
      component.ngOnInit();
      expect<string>(component.message[0].message_description).not.toEqual('loading');
    });
  });
});
