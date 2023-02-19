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

  titleForm:string = '';
  buttonText:string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private store:Store<AlertState>
  ) { }

  ngOnInit(): void {

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

        let idAccount = 0; //TODO: Inicializar con el ID de la cuenta del usuario(HTTP) ACCOUNT_ID
        if(( {...this.transaction} as TransactionNewDTO).transactionType === 'payment'){
          idAccount = this.transactionForm.get('toAccountID')!.value;
        }
        body = {
          type: ( {...this.transaction} as TransactionNewDTO).transactionType,
          concept: this.transactionForm.get('concept')!.value,
          amount: this.transactionForm.get('amount')!.value,
          // date: this.transactionForm.get('transactionDate')!.value //Not required
        }

        //*Send HTTP POST to create new transaction
        //!POST /accounts/{id} + body
        this.http.postGeneric('/accounts/',idAccount,body  );

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
