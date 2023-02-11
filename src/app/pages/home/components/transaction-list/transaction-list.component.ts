import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transaction: Transaction[] = [];
  filter: string | undefined;

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactionsService.getTransactions()
            .subscribe( (resp:any) => {
              console.log(resp);
              this.transaction = resp.data;
            });
  }
  
  opcionElegida(event: any){
    this.filter = event.target.value;

  }

  
}
