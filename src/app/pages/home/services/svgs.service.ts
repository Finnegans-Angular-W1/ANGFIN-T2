import { MONEY_SVG, ROTATE_SVG, ROTATE_SVG2 } from '../constants/SvgsConstants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvgsService {

  private _MONEYSVG:string = MONEY_SVG;

  private ROTATE_SVG:string = ROTATE_SVG;
  private ROTATE_SVG2:string = ROTATE_SVG2;

  constructor() { }

  getMoneySVG():string {
    return this._MONEYSVG;
  }

  getRotateSVG():string {
    return this.ROTATE_SVG;
  }

  getRotateSVG2():string {
    return this.ROTATE_SVG2;
  }

}
