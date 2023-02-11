import { TestBed } from '@angular/core/testing';

import { TipoDeCambioService } from './tipo-de-cambio.service';

describe('TipoDeCambioService', () => {
  let service: TipoDeCambioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDeCambioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
