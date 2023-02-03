import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';
import { TransactionsService } from '../../services/transactions.service';


@Component({
  selector: 'app-home, [app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  transaction: Transaction[] = [];
  

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactionsService.getTransactions()
            .subscribe( (resp:any) => {
              console.log(resp);
              this.transaction = resp.data.splice(0,5);
            });
  }
  
}
