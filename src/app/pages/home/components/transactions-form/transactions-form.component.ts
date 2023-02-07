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
        concept:   ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(55)]],
        amount:    ['', [Validators.required, Validators.min(1)]],
        date:      ['', [Validators.required]]
      });
      //payment (egreso)
      if (( {... this.transaction} as TransactionNewDTO ).transactionType === 'payment'){
        this.titleForm = 'Registrar nuevo egreso'
        this.transactionForm.addControl('toAccountID', this.fb.control('', [Validators.required, Validators.min(1)]));
      }
    }
    else if (this.operationType === 'edit'){
      this.titleForm = 'Editar concepto de transacción'
      const transaction = {...this.transaction} as TransactionEditDTO;
      console.log(transaction.transactionID);
      //TODO: HTTP GET to get transaction data by transactionID
      this.transactionForm = this.fb.group({
        transactionConcept: ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(55)]],
      });
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

    //TODO: NO OLVIDARME USERID(ORIGEN), en un topup el to_account_id es null o igual al account_id(del user)

    if (this.transactionForm.valid){
      if (this.operationType === 'new'){

      }else if (this.operationType === 'edit'){

      }
    }
    else{

      
    }
  }


}
