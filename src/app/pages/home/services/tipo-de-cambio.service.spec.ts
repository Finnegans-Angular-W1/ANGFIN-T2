import { TESTING_MODULES, TESTING_PROVIDERS } from './../../../spec/constants';
import { TestBed } from '@angular/core/testing';

import { TipoDeCambioService } from './tipo-de-cambio.service';

describe('TipoDeCambioService', () => {
  let service: TipoDeCambioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TESTING_MODULES],
      providers: [ TESTING_PROVIDERS ]
    });
    service = TestBed.inject(TipoDeCambioService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
