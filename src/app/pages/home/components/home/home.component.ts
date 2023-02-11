import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';
import { TransactionsService } from '../../services/transactions.service';


@Component({
  selector: 'app-home, [app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

  }
  
}
