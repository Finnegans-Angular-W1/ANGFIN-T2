import { TESTING_PROVIDERS, TESTING_MODULES } from './../../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFormComponent } from './transactions-form.component';

describe('TransactionsFormComponent', () => {
  let component: TransactionsFormComponent;
  let fixture: ComponentFixture<TransactionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ TESTING_MODULES ],
      declarations: [ TransactionsFormComponent ],
      providers: [  TESTING_PROVIDERS ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsFormComponent);
    component = fixture.componentInstance;
    component.operation = { type: 'new' }; //Required Decorator, en cada test modificar segun necesidad
    fixture.detectChanges();
  });

  it('should set the value of myInput', () => {
    component.operation = { type: 'edit'};
    fixture.detectChanges();
    expect(component.operation).toEqual({ type: 'edit'});
  });

  it('should set the value of myInput', () => {
    component.operation = { type: 'new'};
    fixture.detectChanges();
    expect(component.operation).toEqual({ type: 'new'});
  });

});
