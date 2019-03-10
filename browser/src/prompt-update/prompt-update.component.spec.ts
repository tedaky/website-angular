import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';
import { Observable } from 'rxjs';

import { PromptUpdateComponent } from './prompt-update.component';

import { PromptUpdateService } from './prompt-update.service';
import { CancelTimerService } from '../cancel-timer/cancel-timer.service';


interface UpdateAvailableEvent {
  current: string;
  available: string;
}

const updateAvailableEvent: UpdateAvailableEvent = {
  current: 'currentUpdateAvailableEvent',
  available: 'availableUpdateAvailableEvent'
};

class FakePromptUpdateService {
  public get promptUpdate() {
    return Observable.create(
      (observer: any): void => {
        observer.next(updateAvailableEvent);
      });
  }
  public reload() {
    return 'reload';
  }
}
class FakeCancelTimerService {
  public cancel(timer: number) {
    return Observable.create(
      (observer: any): void => {
        observer.next('');
      });
  }
}

describe('PromptUpdateComponent', (): void => {
  let component: PromptUpdateComponent;
  let fixture: ComponentFixture<PromptUpdateComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule
      ],
      declarations: [
        PromptUpdateComponent
      ],
      providers: [
        {
          provide: PromptUpdateService,
          useClass: FakePromptUpdateService
        },
        {
          provide: CancelTimerService,
          useClass: FakeCancelTimerService
        }
      ]
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent<PromptUpdateComponent>(PromptUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the PromptUpdateComponent', (): void => {
    expect<PromptUpdateComponent>(component).toBeDefined();
  });

  it('#reload', (): void => {
    expect<void>(component.reload()).toBeUndefined();
  });

  it('#close', (): void => {
    component.close();
    expect<void>(component.close()).toBeUndefined();
    expect<boolean>(component.closeUpdate).toBeTruthy();
  });
});
