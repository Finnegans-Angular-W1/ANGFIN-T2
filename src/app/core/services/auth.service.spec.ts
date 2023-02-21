import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';
import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [ TESTING_MODULES],
      providers: [ TESTING_PROVIDERS]
    });
    
=======
      providers: [ TESTING_PROVIDERS ],
      imports: [ TESTING_MODULES ]
    });
>>>>>>> develop
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
