import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarSaldosComponent } from './cargar-saldos.component';

describe('CargarSaldosComponent', () => {
  let component: CargarSaldosComponent;
  let fixture: ComponentFixture<CargarSaldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarSaldosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
