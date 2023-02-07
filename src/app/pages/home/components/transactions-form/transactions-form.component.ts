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



  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    if (this.operationType === 'new') {
      const transaction = this.transaction as TransactionNewDTO;

      if (transaction.transactionType === 'payment') {
        this.transactionForm = this.fb.group({
          transactionAccountID: [transaction.transactionAccountID, [Validators.required]],
          transactionConcept: ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(55)]],
          transactionAmount: ['', [Validators.required, Validators.min(1)]],
          transactionDate: ['', [Validators.required]],
          transactionType: [`payment`, [Validators.required]],
        });
      }else if (transaction.transactionType === 'topup') {
        this.transactionForm = this.fb.group({
          transactionAccountID: [, [Validators.required]],
          transactionConcept: ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(55)]],
          transactionAmount: ['', [Validators.required, Validators.min(1)]],
          transactionDate: ['', [Validators.required]],
          transactionType: [`topup`, [Validators.required]],
        });
      }
    }else {
      const transaction = this.transaction as TransactionEditDTO;
      //TODO: HTTP GET to get the transaction data by transactionID
      this.transactionForm = this.fb.group({
        transactionID: [transaction.transactionID, [Validators.required]],
        transactionConcept: [transaction.transactionConcept, [Validators.required, Validators.minLength(5) ,Validators.maxLength(55)]],
      });
    }

  }


  operationTypeEqualToNew():boolean{
    return this.operationType === 'new';
  }

  transactionTypeEqualToPayment():boolean{
    return ( {...this.transaction} as TransactionNewDTO).transactionType === 'payment';
  }


}
