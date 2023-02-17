import { showAlert, hideAlert } from '../state/states/alertState/alert.actions';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AlertState } from 'src/app/core/state/states/alertState/alert.state';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(private store:Store<AlertState>) { }

  onShowAlert(message:string, alertType:string){
    this.store.dispatch(showAlert({ message , alertType} ));
  } 

  onHideAlert(){
    this.store.dispatch(hideAlert());
  }
}
