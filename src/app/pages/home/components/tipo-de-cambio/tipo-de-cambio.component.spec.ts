import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeCambioComponent } from './tipo-de-cambio.component';

describe('TipoDeCambioComponent', () => {
  let component: TipoDeCambioComponent;
  let fixture: ComponentFixture<TipoDeCambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeCambioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDeCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
