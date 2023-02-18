import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';

import { SocialComponent } from './social.component';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TESTING_MODULES],
      declarations: [SocialComponent],
    providers: [ TESTING_PROVIDERS]
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

