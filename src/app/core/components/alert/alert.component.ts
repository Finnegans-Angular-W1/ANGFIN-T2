import { hideAlert } from './../../state/states/alertState/alert.actions';
import { Store } from '@ngrx/store';
import { alertType, ALERTS_TYPES } from './../../constants/alertTypes';
import { Component, Input, OnInit } from '@angular/core';
import { AlertState } from '../../state/states/alertState/alert.state';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alert:alertType = ALERTS_TYPES.error;

  @Input() type:string = 'error';
  @Input() msg:string = 'Error! Task failed successfully.';

  constructor(private store:Store<AlertState>) {
    if (this.type === 'success') {
      this.alert = ALERTS_TYPES.success;
    } else if (this.type === 'warning') {
      this.alert = ALERTS_TYPES.warning;
    }
  }

  ngOnInit(): void {
  }

  onCloseAlert(){
    this.store.dispatch(hideAlert());
  }

} 
