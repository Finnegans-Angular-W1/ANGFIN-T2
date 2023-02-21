import { TESTING_PROVIDERS, TESTING_MODULES } from 'src/app/spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafeHTMLPipe } from 'src/app/shared/pipes/safe-html.pipe';
import { SocialComponent } from './social.component';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ SocialComponent,
        SafeHTMLPipe ],
      providers: [ TESTING_PROVIDERS ],
      imports: [ TESTING_MODULES ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

