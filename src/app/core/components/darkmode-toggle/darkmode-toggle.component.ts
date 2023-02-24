import { darkModeOFF, darkModeON } from './../../state/states/darkmodeState/darkmode.actions';
import { Store } from '@ngrx/store';
import { DarkModeState } from './../../state/states/darkmodeState/darkmode.state';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode-toggle',
  templateUrl: './darkmode-toggle.component.html',
  styleUrls: ['./darkmode-toggle.component.scss']
})
export class DarkmodeToggleComponent implements OnInit {
  
  checkboxControl:FormControl = new FormControl(false);

  constructor(private store:Store<DarkModeState>) { }

  ngOnInit(): void {
  }

  switchDarkMode(){
    this.checkboxControl.value ? this.store.dispatch(darkModeON()) : this.store.dispatch(darkModeOFF());
  }

}
