import { alertType, ALERTS_TYPES } from './../../constants/alertTypes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  //Funciona con los inputs por el momento
  //los demás valores de los inputs, lo tiene anotado Brian
  
  alert:alertType = ALERTS_TYPES.error;

  @Input() type:string = 'error';
  @Input() msg:string = 'Error! Task failed successfully.';

  constructor() {
    if (this.type === 'success') {
      this.alert = ALERTS_TYPES.success;
    } else if (this.type === 'warning') {
      this.alert = ALERTS_TYPES.warning;
    }
  }

  ngOnInit(): void {
  }

} 
