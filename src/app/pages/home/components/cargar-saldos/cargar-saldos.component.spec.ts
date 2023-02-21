import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TESTING_PROVIDERS } from 'src/app/spec/constants';
import { TransactionsFormComponent } from '../transactions-form/transactions-form.component';

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
    fixture.detectChanges
    const { debugElement } = fixture;
    const form = debugElement.query(By.css('app-transactions-form'))
    expect(form).toBeTruthy()
    
  });
});
