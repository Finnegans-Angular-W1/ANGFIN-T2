import { AlertServiceService } from './alert-service.service';
import {HttpClientTestingModule} from "@angular/common/http/testing"
import { TestBed } from '@angular/core/testing';

describe('AlertServiceService', () => {
  let service: AlertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AlertServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
