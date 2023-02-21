import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';
import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[TESTING_PROVIDERS],
      imports:[TESTING_MODULES]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
