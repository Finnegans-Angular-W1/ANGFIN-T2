
import { TestBed } from '@angular/core/testing';
import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';
import { AlertServiceService } from './alert-service.service';

describe('AlertServiceService', () => {
  let service: AlertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[TESTING_PROVIDERS],
      imports:[TESTING_MODULES]
    });
    service = TestBed.inject(AlertServiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
