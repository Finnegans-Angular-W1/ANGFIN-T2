import { getAccount } from './../../../../core/state/states/accountState/account.selectors';
import { getAllTransactions } from './../../../../core/state/states/transactionsState/transactions.actions';
import { getUser } from './../../../auth-login/state/auth.selectors';
import { take } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';
import { TransactionsService } from '../../services/transactions.service';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';
import { Account } from 'src/app/core/interfaces/account';


@Component({
  selector: 'app-home, [app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username:string = 'Alky';
  money:number = 0;
  
  constructor(private store:Store<AuthState>) { }

  ngOnInit() {
    this.store.dispatch(getAllTransactions());
    this.store.select(getAccount)
    .subscribe( (account:Account) => {
      console.log('ACCOUNT RESPONSE', account);
      this.money = account.money;

    });


    this.store.select(getUser)
    .pipe(
      take(1)
    )
    .subscribe(auth => {
      this.username = auth.first_name + ' ' + auth.last_name;
    });
  }
  
}
