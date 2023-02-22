import { TESTING_PROVIDERS, TESTING_MODULES } from './../../../spec/constants';
import { TestBed } from '@angular/core/testing';

import { SvgsService } from './svgs.service';

describe('SvgsService', () => {
  let service: SvgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TESTING_MODULES ],
      providers: [ TESTING_PROVIDERS ],
    });
    service = TestBed.inject(SvgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
