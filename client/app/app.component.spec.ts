import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
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
});
