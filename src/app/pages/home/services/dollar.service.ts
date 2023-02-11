import { Observable } from 'rxjs';
import { DollarResponse } from './../interfaces/dollarBlueResponse';
import { UpdatedTime } from './../interfaces/updatedTimeResponse';
import { HttpService } from './../../../core/services/http.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DollarService {

  private _apiDolar:string = 'https://dolar-api-argentina.vercel.app';

  private _apiCoindeskTime:string = 'https://api.coindesk.com/v1/bpi/historical/close.json';

  private _paramDolarBlue:string = '/v1/dolares/blue';
  private _paramDolarOficial:string = '/v1/dolares/oficial';

  
  constructor(private http:HttpService) { }

  getUpdatedTime():Observable<UpdatedTime>{ return this.http.get<UpdatedTime>(`${this._apiCoindeskTime}`) }

  getBluePrice():Observable<DollarResponse>{ return this.http.get<DollarResponse>(`${this._apiDolar}${this._paramDolarBlue}`) }

  getOficialPrice():Observable<DollarResponse>{ return this.http.get<DollarResponse>(`${this._apiDolar}${this._paramDolarOficial}`) }

}
