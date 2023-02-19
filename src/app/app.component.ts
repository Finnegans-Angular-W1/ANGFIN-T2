import { getLoaderShow, getLoaderMessage } from './core/state/states/loaderState/loader.selectors';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/core/state/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { getAlertShow, getAlertMessage, getAlertType } from './core/state/states/alertState/alert.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Alky Bank';

  
  showAlert$:Observable<boolean>;
  messageAlert$:Observable<string>;
  typeAlert$:Observable<string>;

  showLoader$:Observable<boolean>;
  messageLoader$:Observable<string>;

  constructor(private store:Store<AppState>) { 
    this.showAlert$ = this.store.select(getAlertShow);
    this.messageAlert$ = this.store.select(getAlertMessage);
    this.typeAlert$ = this.store.select(getAlertType);


    this.showLoader$ = this.store.select(getLoaderShow);
    this.messageLoader$ = this.store.select(getLoaderMessage);
  }

  ngOnInit(): void {  }

}
