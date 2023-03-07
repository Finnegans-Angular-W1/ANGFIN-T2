import { TransactionRequest } from 'src/app/core/interfaces/transaction-request';
import { createTransaction } from './../../../../core/state/states/transactionsState/transactions.actions';
import { getAccount } from './../../../../core/state/states/accountState/account.selectors';
import { TransactionState } from './../../../../core/state/states/transactionsState/transactions.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { TransactionNewDTO, TransactionEditDTO, Operation } from './../../interfaces/transactionFormInterfaces';
import { Required } from 'src/app/shared/decorators/required.decorator';

import { HttpService } from 'src/app/core/services/http.service';

import { AlertState } from 'src/app/core/state/states/alertState/alert.state';
import { showAlert } from 'src/app/core/state/states/alertState/alert.actions';


@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html'
})
export class TransactionsFormComponent implements OnInit {

  //!Required
  @Input() @Required('operationType') operation!:Operation; // 'new' or 'edit'

  @Input() transaction!: TransactionNewDTO | TransactionEditDTO; 

  transactionForm!:FormGroup;

  idActualAccount:number = 0;
  userActualID:number = 0;

  titleForm:string = '';
  buttonText:string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private store:Store<AlertState | TransactionState>
  ) { }

  ngOnInit(): void {
    this.store.select(getAccount).subscribe( account => {
      if (account){
        this.idActualAccount = account.id;
        this.userActualID = account.userId;
      }
    })

    if (this.operation.type === 'new') {
      this.titleForm = 'Registrar nuevo ingreso'
      this.buttonText = 'Registrar'
      //topup (ingreso)
      this.transactionForm = this.fb.group({
        concept:   ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(35)]],
        amount:    ['', [Validators.required, Validators.min(1)]],
        transactionDate:      ['', [Validators.required]]
      });
      
      if (( {... this.transaction} as TransactionNewDTO ).transactionType === 'payment'){//payment (egreso)
        this.titleForm = 'Registrar nuevo egreso'
        this.transactionForm.addControl('toAccountID', this.fb.control('', [Validators.required, Validators.min(1)]));
      }
    }
    else if (this.operation.type === 'edit'){
      this.buttonText = 'Guardar'
      this.titleForm = 'Editar concepto de transacción'
      this.transactionForm = this.fb.group({ concept:   ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(35)]] });
    }    
  }

  operationTypeEqualToNew():boolean{
    return this.operation.type === 'new';
  }

  transactionTypeEqualToPayment():boolean{
    return ( {...this.transaction} as TransactionNewDTO).transactionType === 'payment';
  }

  touchedAndInvalid(field:string):boolean {
    if (this.transactionForm){
      return ( this.transactionForm.get(field)!.touched
        && this.transactionForm.get(field)!.invalid  );
    }
    return false;
  }

  touchedAndHasError(field:string, error:string):boolean {
    if (this.transactionForm){
      return ( this.transactionForm.get(field)!.touched
        && this.transactionForm.get(field)!.hasError(error)  );
    }
    return false;
  }


  onSubmitForm(){
    
    let body = {};

    if (this.transactionForm.valid){
      if (this.operation.type === 'new'){
        //TODO: Inicializar con el ID de la cuenta del usuario(HTTP) ACCOUNT_ID

        let toIdAccount = this.idActualAccount;
        if(( {...this.transaction} as TransactionNewDTO).transactionType === 'payment'){
          //SI es pago mando el accoutn del form, SINO ES INGRESO, por lo tanto mando el mismo account
          toIdAccount = this.transactionForm.get('toAccountID')!.value;
        }
        const body:TransactionRequest = {
          type: ( ( {...this.transaction} as TransactionNewDTO).transactionType ) as 'topup' | 'payment',
          concept: this.transactionForm.get('concept')!.value,
          amount: this.transactionForm.get('amount')!.value,
          to_account_id: toIdAccount,
          accountId: toIdAccount,
          userId: this.userActualID,
          date: this.transactionForm.get('transactionDate')!.value //Not required
        }

        this.store.dispatch(createTransaction( { transactionRequest: body }));
      }else if (this.operation.type === 'edit'){

        //TODO:USERID(ORIGEN) + TRANSACTION DATA(get by id transaction) + CONCEPT EDITED
        //only concept edited
        //!PUT /transactions/{id} + { concept: conceptEdited }
      }
    }
    else{
      this.store.dispatch(showAlert({alertType:'error', message:'Campos Invalidos'}))
      this.transactionForm.markAllAsTouched();
    }
  }


}
