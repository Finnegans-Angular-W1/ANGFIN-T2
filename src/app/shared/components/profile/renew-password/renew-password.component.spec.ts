import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';

import { RenewPasswordComponent } from './renew-password.component';

describe('RenewPasswordComponent', () => {
  let component: RenewPasswordComponent;
  let fixture: ComponentFixture<RenewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TESTING_MODULES],
      providers: [ TESTING_PROVIDERS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
