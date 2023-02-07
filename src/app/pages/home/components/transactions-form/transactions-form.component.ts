import { TransactionEditDTO } from './../../interfaces/transactionEditDTO';
import { TransactionNewDTO } from './../../interfaces/transactionNewDTO';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  styleUrls: ['./transactions-form.component.scss']
})
export class TransactionsFormComponent implements OnInit {

  //!Required
  @Input() operationType: string = ''; // 'new' or 'edit'

//New Transaction
//payment
  @Input() transaction!: TransactionNewDTO | TransactionEditDTO; 

//deposit
//ID Equally to AccountID 

//Edit = only edit concept.

  transactionForm!:FormGroup;

  titleForm:string = '';



  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    if (this.operationType === 'new') {
      this.titleForm = 'Registrar nuevo ingreso'
      //topup (ingreso)
      this.transactionForm = this.fb.group({
        concept:   ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(35)]],
        amount:    ['', [Validators.required, Validators.min(1)]],
        date:      ['', [Validators.required]]
      });
      
      if (( {... this.transaction} as TransactionNewDTO ).transactionType === 'payment'){//payment (egreso)
        this.titleForm = 'Registrar nuevo egreso'
        this.transactionForm.addControl('toAccountID', this.fb.control('', [Validators.required, Validators.min(1)]));
      }
    }
    else if (this.operationType === 'edit'){
      this.titleForm = 'Editar concepto de transacción'
      this.transactionForm = this.fb.group({ concept:   ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(35)]] });
    }    
  }

  operationTypeEqualToNew():boolean{
    return this.operationType === 'new';
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
      if (this.operationType === 'new'){

        let idAccount = 0; //TODO: Inicializar con el ID de la cuenta del usuario(HTTP) ACCOUNT_ID
        if(( {...this.transaction} as TransactionNewDTO).transactionType === 'payment'){
          idAccount = this.transactionForm.get('toAccountID')!.value;
        }
        body = {
          type: ( {...this.transaction} as TransactionNewDTO).transactionType,
          concept: this.transactionForm.get('concept')!.value,
          amount: this.transactionForm.get('amount')!.value,
          // date: this.transactionForm.get('date')!.value //Not required
        }

        //*Send HTTP POST to create new transaction
        //!POST /accounts/{id} + body

      }else if (this.operationType === 'edit'){

        //TODO:USERID(ORIGEN) + TRANSACTION DATA(get by id transaction) + CONCEPT EDITED
        //only concept edited
        //!PUT /transactions/{id} + { concept: conceptEdited }
      }
    }
    else{
      //TODO: set stateAlert to true
      this.transactionForm.markAllAsTouched();
    }
  }


}
