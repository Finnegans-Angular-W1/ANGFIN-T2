import { getUser } from './../../../auth-login/state/auth.selectors';
import { take } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';
import { TransactionsService } from '../../services/transactions.service';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';


@Component({
  selector: 'app-home, [app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username:string = 'Alky';
  
  constructor(private store:Store<AuthState>) { }

  ngOnInit() {
    this.store.select(getUser)
    .pipe(
      take(1)
    )
    .subscribe(auth => {
      this.username = auth.first_name + ' ' + auth.last_name;
    });
  }
  
}
