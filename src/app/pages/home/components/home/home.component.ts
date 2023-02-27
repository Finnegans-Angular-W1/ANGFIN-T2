import { getAccount } from './../../../../core/state/states/accountState/account.selectors';
import { getAllTransactions } from './../../../../core/state/states/transactionsState/transactions.actions';
import { getUser } from './../../../auth-login/state/auth.selectors';
import { take, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';
import { Account } from 'src/app/core/interfaces/account';


@Component({
  selector: 'app-home, [app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  username:string = 'Alky';
  money:number = 0;

  subUser!:Subscription;
  subAccount!:Subscription;

  lastTopup:number = 200;
  lastPayment:number = 200;

  
  constructor(private store:Store<AuthState>) { }

  ngOnInit() {
    this.store.dispatch(getAllTransactions());
    this.subAccount = this.store.select(getAccount)
    .subscribe( (account:Account) => {
      console.log('ACCOUNT RESPONSE', account);
      this.money = account.money;
    });


    this.subUser = this.store.select(getUser)
    .subscribe(auth => {
      this.username = auth.first_name + ' ' + auth.last_name;
    });
  }

  ngOnDestroy(): void {
    this.subUser.unsubscribe();
    this.subAccount.unsubscribe();
  }
  
}
