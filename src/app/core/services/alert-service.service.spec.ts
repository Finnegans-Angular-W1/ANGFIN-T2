import { TestBed } from '@angular/core/testing';
import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';
import { AlertServiceService } from "./alert-service.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe("AlertServiceService", () => {
  let service: AlertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TESTING_MODULES,
        HttpClientTestingModule ], 
      providers: [ TESTING_PROVIDERS]
    });
    service = TestBed.inject(AlertServiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
