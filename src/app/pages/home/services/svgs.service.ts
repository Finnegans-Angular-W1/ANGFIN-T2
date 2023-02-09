import { MONEY_SVG } from './../constants/money-paper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvgsService {

  private _MONEYSVG:string = MONEY_SVG;

  constructor() { }

  getMoneySVG():string {
    return this._MONEYSVG;
  }

}
