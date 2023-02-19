import { HttpClientTestingModule } from "@angular/common/http/testing";
import { IdEndpointsService } from "./id-endpoints.service";
import { TestBed } from "@angular/core/testing";

describe("IdEndpointsService", () => {
  let service: IdEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(IdEndpointsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
