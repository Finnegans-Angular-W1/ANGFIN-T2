import { TestBed } from '@angular/core/testing';

import { IdEndpointsService } from './id-endpoints.service';

describe('IdEndpointsService', () => {
  let service: IdEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
