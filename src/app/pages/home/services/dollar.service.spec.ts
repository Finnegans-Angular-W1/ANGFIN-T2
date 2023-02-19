import { TESTING_PROVIDERS, TESTING_MODULES } from './../../../spec/constants';
import { TestBed } from '@angular/core/testing';

import { DollarService } from './dollar.service';

describe('DollarService', () => {
  let service: DollarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TESTING_MODULES ],
      providers: [ TESTING_PROVIDERS ]
    });
    service = TestBed.inject(DollarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
