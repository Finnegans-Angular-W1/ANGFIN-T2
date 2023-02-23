import { take, Observable } from 'rxjs';
import { HttpService } from './../../../../core/services/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { Transaction } from '../../interfaces/transaction';

@Component({
  selector: 'app-modal-gastos',
  templateUrl: './modal-gastos.component.html',
  styleUrls: ['./modal-gastos.component.scss']
})
export class ModalGastosComponent implements OnInit, AfterViewInit {

  transactionForm!:FormGroup;
  private _apiUrl: string = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com';
  transactionActual:Transaction = 
  { id:0, concept:'', amount:0, type:'', date:'',
  accountId: 0, toAccountId: 0, userId: 0 }; 

  @Input() id$!:Observable<number>;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(
    private fb:FormBuilder,
    private httpS:HttpService
  ) {

  }

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      concept:   ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(35)]]
    })
    if(this.id$){
      this.id$.subscribe( (id:number) => {
          this.httpS.get<Transaction>(this._apiUrl+'/transactions/'+id)
          .pipe(
            take(1)
          )
          .subscribe( (data:Transaction ) => {
            this.transactionActual = data;
            console.log(this.transactionActual);
          });
        }
      );
    }
  }

  ngAfterViewInit(){
    console.log(this.id$);
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

  onSubmit(){
    let bodyRequest:Transaction = this.transactionActual;
    if (this.transactionForm.valid){
      bodyRequest.concept = this.transactionForm.value.concept;
      this.httpS.put<Transaction>(this._apiUrl+'/transactions/'+this.transactionActual.id, bodyRequest)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        }
      } );
      console.log('submit form', bodyRequest);
      this.onCloseModal();
    } else {
      this.transactionForm.markAllAsTouched();
    }
  }

  onCloseModal(){
    this.closeModal.emit(true);
    this.transactionForm.reset();
    console.log(this.id$, this.transactionActual);
  }


}
