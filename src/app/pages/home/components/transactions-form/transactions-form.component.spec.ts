import { TESTING_PROVIDERS, TESTING_MODULES } from './../../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFormComponent } from './transactions-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


describe('TransactionsFormComponent', () => {
  let component: TransactionsFormComponent;
  let fixture: ComponentFixture<TransactionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsFormComponent ],
      imports:[ TESTING_MODULES, 
        ReactiveFormsModule],
      providers: [ TESTING_PROVIDERS,
                HttpService ]
    })
    .compileComponents();
   
    fixture = TestBed.createComponent(TransactionsFormComponent);
    component = fixture.componentInstance;
    component.operation = { type: 'new' }; //Required Decorator, en cada test modificar segun necesidad
    fixture.detectChanges();
  });

  it('should set the value of myInput: edit', () => {
    component.operation = { type: 'edit'};
    fixture.detectChanges();
    expect(component.operation).toEqual({ type: 'edit'});
  });

  it('should set the value of myInput: new', () => {
    component.operation = { type: 'new'};
    fixture.detectChanges();
    expect(component.operation).toEqual({ type: 'new'});
  });


  it('should validate form fields for topup transaction', () => {
    component.operation = { type: 'new'};
    fixture.detectChanges();
    
    const mockVariable ={
      concept: 'Supermercado',
      amount: 23000,
      transactionDate: '18/02/2023',
    }

    const conceptForm: any = component.transactionForm.get('concept')
    const amountForm: any = component.transactionForm.get('amount')
    const dateForm: any = component.transactionForm.get('transactionDate')

    conceptForm.setValue(mockVariable.concept)
    amountForm.setValue(mockVariable.amount)
    dateForm.setValue(mockVariable.transactionDate)
    
    expect(component.operation).toEqual({ type: 'new'});
    expect(component.transactionForm.valid).toEqual(true);
  });

  it('should invalidate form fields for topup transaction', () => {
    component.operation = { type: 'new'};
    fixture.detectChanges();
    
    const mockVariable ={
      concept: '',
      amount: '',
      transactionDate: '',
    }

    const conceptForm: any = component.transactionForm.get('concept')
    const amountForm: any = component.transactionForm.get('amount')
    const dateForm: any = component.transactionForm.get('transactionDate')

    const buttonElement = fixture.debugElement.nativeElement.querySelector('#submitButton');

    conceptForm.setValue(mockVariable.concept)
    amountForm.setValue(mockVariable.amount)
    dateForm.setValue(mockVariable.transactionDate)
    
    expect(buttonElement.disabled).toEqual(true)
    expect(component.operation).toEqual({ type: 'new'});
    expect(component.transactionForm.valid).toEqual(false);
  });

  it('should called onSubmitForm when click the submit button', () => {
    component.operation = { type: 'new'};
    fixture.detectChanges();
      
    const mockVariable ={
      concept: 'Supermercado',
      amount: 23000,
      transactionDate: '18/02/2023',
    }

    const conceptForm: any = component.transactionForm.get('concept')
    const amountForm: any = component.transactionForm.get('amount')
    const dateForm: any = component.transactionForm.get('transactionDate')
    
    conceptForm.setValue(mockVariable.concept)
    amountForm.setValue(mockVariable.amount)
    dateForm.setValue(mockVariable.transactionDate)

    expect(component.transactionForm.valid).toEqual(true)
    expect(component.operation).toEqual({ type: 'new'})

    fixture.detectChanges()

    const mockFunction = spyOn(component, 'onSubmitForm').and.callThrough()
    const buttonElement = fixture.debugElement.nativeElement.querySelector('#submitButton')
    
    fixture.detectChanges()
    
    buttonElement.click()

    fixture.detectChanges()
    
    expect(mockFunction).toHaveBeenCalled()
    
  });

});
