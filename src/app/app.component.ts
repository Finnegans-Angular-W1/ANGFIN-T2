import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/core/state/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { getAlertShow, getAlertMessage } from './core/state/states/alertState/alert.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-wallet';
  
  showAlert$:Observable<boolean>;
  messageAlert$:Observable<string>;
  
  constructor(private store:Store<AppState>) { 
    this.showAlert$ = this.store.select(getAlertShow);
    this.messageAlert$ = this.store.select(getAlertMessage);
  }

  ngOnInit(): void {
  
  }


}
