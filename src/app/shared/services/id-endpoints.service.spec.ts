import { TestBed } from '@angular/core/testing';
import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';

import { IdEndpointsService } from './id-endpoints.service';

describe('IdEndpointsService', () => {
  let service: IdEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TESTING_MODULES],
      providers: [ TESTING_PROVIDERS]
    });
    service = TestBed.inject(IdEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
