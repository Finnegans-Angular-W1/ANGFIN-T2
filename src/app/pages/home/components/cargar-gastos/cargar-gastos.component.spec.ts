import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CargarGastosComponent } from "./cargar-gastos.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("CargarGastosComponent", () => {
  let component: CargarGastosComponent;
  let fixture: ComponentFixture<CargarGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargarGastosComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CargarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
