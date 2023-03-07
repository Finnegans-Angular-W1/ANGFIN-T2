import { TESTING_MODULES, TESTING_PROVIDERS } from './../../spec/constants';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TESTING_MODULES],
      providers: [ TESTING_PROVIDERS]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
