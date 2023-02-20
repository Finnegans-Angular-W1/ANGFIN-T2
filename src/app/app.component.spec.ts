import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TESTING_MODULES
      ],
      declarations: [
        AppComponent,
        
      ],providers: [TESTING_PROVIDERS]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
