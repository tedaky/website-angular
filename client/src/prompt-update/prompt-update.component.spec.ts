import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';
import { Observable } from 'rxjs';

import { PromptUpdateComponent } from './prompt-update.component';

import { PromptUpdateService } from './prompt-update.service';

class FakePromptUpdateService {
  public promptUpdate() {
    return new Observable();
  }
  public reload() {
    return 'reload';
  }
}

describe('PromptUpdateComponent', (): void => {
  let component: PromptUpdateComponent;
  let fixture: ComponentFixture<PromptUpdateComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [
        PromptUpdateComponent
      ],
      providers: [
        {
          provide: PromptUpdateService,
          useClass: FakePromptUpdateService
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

  it('#ngOnInit', (): void => {
    expect<void>(component.ngOnInit()).toBeUndefined();
    expect<boolean>(component.updateAvailable).toBeFalsy();
    expect<boolean>(component.closeUpdate).toBeFalsy();
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
