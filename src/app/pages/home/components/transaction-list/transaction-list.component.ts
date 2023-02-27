import { getTransactions } from './../../../../core/state/states/transactionsState/transactions.selectors';
import { TransactionState } from './../../../../core/state/states/transactionsState/transactions.state';
import { Store } from '@ngrx/store';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';

import { BehaviorSubject, debounceTime } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transaction: Transaction[] = [];
  
  opcionFiltrado !: string;
  valorBuscado !: string;
  arrayFiltrado: Transaction[] = []

  money:number = 0;

  //TODO: Hacer otuptu de estas 2 variables asi lo consume el home
  @Output() lastPaymentPrice = new EventEmitter<number>;
  @Output() lastTopUpPrice = new EventEmitter<number>;
 /*  lastPaymentPrice:number = 0;
  lastTopUpPrice:number = 0; */

  form: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder, private store:Store<TransactionState>) { }  

  ngOnInit() {
    this.store.select(getTransactions)
    .subscribe( (resp:Transaction[]) => {
      console.log('TRANSACTION RESPONSE', resp);
      //TODO: NO anda, tira errores, asiq ver q onda
      // const aux = resp.filter( (transaction:Transaction) => transaction.type === 'payment');
      // this.lastPaymentPrice = aux[aux.length - 1].amount;
      // const aux2 = resp.filter( (transaction:Transaction) => transaction.type === 'topup');
      // this.lastTopUpPrice = aux2[aux2.length - 1].amount;

      this.transaction = resp;
    });

    this.form = this.formBuilder.group({
      selectorInicial: ['', [Validators.required]],
      palabra: ['', [Validators.required]],
      operacion: ['', [Validators.required]]
    });
  }
  
  opcionElegida(event: any){
    this.opcionFiltrado = event.target.value;
  }

  getOpcionInicial(){
    this.form.get("selectorInicial");
  }

  getPalabra() {
    this.form.get("palabra");
  }

  getOperacion(){
    this.form.get("operacion")
  }

  openEdit:boolean = false;

  idBehaviorSubject = new BehaviorSubject<number>(0);

  getIdObservable(){
    return this.idBehaviorSubject.asObservable();
  }

  openEditModal(id:number){
    this.idBehaviorSubject.next(id);
    this.openEdit = true;
  }

    mostrarEgreso(value: number){
    this.lastPaymentPrice.emit(value)
  }
  mostrarIngreso(value:number){
    this.lastTopUpPrice.emit(value)
  }


}
