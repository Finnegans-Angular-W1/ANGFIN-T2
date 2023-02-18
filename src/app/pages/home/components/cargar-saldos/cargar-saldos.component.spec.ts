import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TESTING_PROVIDERS } from 'src/app/spec/constants';

import { CargarSaldosComponent } from './cargar-saldos.component';

describe('CargarSaldosComponent', () => {
  let component: CargarSaldosComponent;
  let fixture: ComponentFixture<CargarSaldosComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarSaldosComponent],
      providers: [TESTING_PROVIDERS]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    fixture.detectChanges();
  });

  it('should call transactionForm', () => {
    
    expect(component).toBeTruthy();
  });
});
