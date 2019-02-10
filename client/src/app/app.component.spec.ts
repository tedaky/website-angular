import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { CheckForUpdateService } from '../check-for-update/check-for-update.service';
import { LogUpdateService } from '../log-update/log-update.service';

@Component({
  selector: 'app-prompt-update-component',
  template: ''
})
class FakePromptUpdateComponent {}

class FakeCheckForUpdateService {
  public checkForUpdate() {
    return 'checkForUpdate';
  }
}
class FakeLogUpdateService {
  public logUpdateAvailable() {
    return 'logUpdateAvailable';
  }
  public logUpdateActivated() {
    return 'logUpdateActivated';
  }
}

describe('AppComponent', (): void => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        FakePromptUpdateComponent
      ],
      providers: [
        {
          provide: CheckForUpdateService,
          useClass: FakeCheckForUpdateService
        },
        {
          provide: LogUpdateService,
          useClass: FakeLogUpdateService
        }
      ]
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent<AppComponent>(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', (): void => {
    expect<AppComponent>(component).toBeDefined();
  });

  it('#loadServices', (): void => {
    expect<void>(component.loadServices(true)).toBeUndefined();
  });
});
