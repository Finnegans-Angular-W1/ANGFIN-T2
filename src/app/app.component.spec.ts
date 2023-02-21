import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TESTING_MODULES
      ],
      declarations: [
        AppComponent
      ], providers: [TESTING_PROVIDERS]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
