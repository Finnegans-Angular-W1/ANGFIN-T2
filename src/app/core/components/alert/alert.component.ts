import { getAlertType } from './../../state/states/alertState/alert.selectors';
import { Subscription } from 'rxjs';
import { hideAlert } from './../../state/states/alertState/alert.actions';
import { Store } from '@ngrx/store';
import { alertType, ALERTS_TYPES } from './../../constants/alertTypes';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AlertState } from '../../state/states/alertState/alert.state';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  alert:alertType = ALERTS_TYPES.error;

  @Input() type:string = 'error';
  @Input() msg:string = 'Error! Task failed successfully.';

  subType!:Subscription;

  constructor(private store:Store<AlertState>) {
    this.subType = this.store.select(getAlertType).subscribe( (alert) => {
      console.log(alert);
      this.type = alert;
      if (this.type === 'success') {
        this.alert = ALERTS_TYPES.success;
      } else if (this.type === 'warning') {
        this.alert = ALERTS_TYPES.warning;
      }
    });
  }

  ngOnInit(): void {

  }

  onCloseAlert(){
    this.store.dispatch(hideAlert());
  }

  ngOnDestroy(): void {
    this.subType.unsubscribe();
  }

} 
