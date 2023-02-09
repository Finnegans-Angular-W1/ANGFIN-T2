import { SvgsService } from './../../services/svgs.service';
import { UpdatedTime } from './../../interfaces/updatedTimeResponse';
import { DollarResponse } from '../../interfaces/dollarBlueResponse';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { take, Subscription, debounceTime } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-moneda',
  templateUrl: './cambiar-moneda.component.html',
  styleUrls: ['./cambiar-moneda.component.scss'],
  encapsulation: ViewEncapsulation.None
})

//TODO: VER lo de view encapsulation en base al otro visual (portfolio), lueg ohacer los commits de cada respectiva cosa.
export class CambiarMonedaComponent implements OnInit, OnDestroy {

  saleBlueUsdPrice: number = 0;
  buyBlueUsdPrice: number = 0;

  saleOficialUsdPrice: number = 0;
  buyOficialUsdPrice: number = 0;


  ficticeUpdateTime:string = '';

  arsToUsd:boolean = true;

  amountFormControl:FormControl = new FormControl(null , [Validators.required, Validators.min(1), Validators.max(9000000)]);
  dollarTypeForm:FormGroup;

  subChangeAmount!:Subscription;
  actualAmountValue:number = 0;

  coinsAndPaperSVG:string;
  

  constructor (
    private http:HttpClient,
    svgs:SvgsService
  ) { 
    this.coinsAndPaperSVG = svgs.getMoneySVG();


    this.dollarTypeForm = new FormGroup({
      radioDollarType: new FormControl('blue')
    });
  }

  ngOnInit(): void {
    this.getUpdateTime()

    this.getBluePrice()
    this.getOficialPrice()


    this.subChangeAmount = this.amountFormControl.valueChanges
    .pipe(  debounceTime(200) )
    .subscribe((value) => { 
      if( this.amountFormControl.valid) 
        this.actualAmountValue = value; 
    });
  }

  ngOnDestroy(): void {
    this.subChangeAmount?.unsubscribe();
  }

  getUpdateTime(){
    this.http.get<UpdatedTime>('https://api.coindesk.com/v1/bpi/historical/close.json')
    .pipe( take(1) )
    .subscribe((data:UpdatedTime) => {
      this.ficticeUpdateTime = data.time.updated;
    });
  }

  getBluePrice(){
    this.http.get<DollarResponse>('https://dolar-api-argentina.vercel.app/v1/dolares/blue')
    .pipe( take(1) )
    .subscribe((data:DollarResponse) => {
      this.saleOficialUsdPrice = data.venta;
      this.buyOficialUsdPrice = data.compra;
    });    
  }

  getOficialPrice(){
    this.http.get<DollarResponse>('https://dolar-api-argentina.vercel.app/v1/dolares/oficial')
    .pipe( take(1) )
    .subscribe((data:DollarResponse) => {
      this.saleBlueUsdPrice = data.venta;
      this.buyBlueUsdPrice = data.compra;
    });
  }

  dollarTypeIsBlue(){
    return this.dollarTypeForm.get('radioDollarType')?.value === 'blue';
  }

  rotateCurrency(){
    this.arsToUsd = !this.arsToUsd;
  }
}
