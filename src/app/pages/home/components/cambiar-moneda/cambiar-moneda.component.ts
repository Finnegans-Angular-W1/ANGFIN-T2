import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { take, Subscription, debounceTime } from 'rxjs';

import { DollarResponse } from '../../interfaces/dollarBlueResponse';
import { DollarService } from './../../services/dollar.service';
import { SvgsService } from './../../services/svgs.service';
import { UpdatedTime } from './../../interfaces/updatedTimeResponse';

@Component({
  selector: 'app-cambiar-moneda',
  templateUrl: './cambiar-moneda.component.html',
  styleUrls: ['./cambiar-moneda.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CambiarMonedaComponent implements OnInit, OnDestroy {

  saleBlueUsdPrice: number = 0;
  buyBlueUsdPrice: number = 0;

  saleOficialUsdPrice: number = 0;
  buyOficialUsdPrice: number = 0;


  ficticeUpdateTime:string = '';

  arsToUsd:boolean = true;

  amountFormControl:FormControl;
  dollarTypeForm:FormGroup;

  subChangeAmount!:Subscription;
  actualAmountValue:number = 0;

  coinsAndPaperSVG:string;
  rotateSVG:string;
  rotateSVG2:string;
  

  constructor (
    private dollar:DollarService,
    svgs:SvgsService
    ) { 
    this.coinsAndPaperSVG = svgs.getMoneySVG();
    this.rotateSVG = svgs.getRotateSVG();
    this.rotateSVG2 = svgs.getRotateSVG2();

    this.dollarTypeForm = new FormGroup({ radioDollarType: new FormControl('blue') });
    this.amountFormControl = new FormControl(null , [Validators.required, Validators.min(1), Validators.max(9000000)]);
  }

  ngOnInit(): void {
    this.dollar.getUpdatedTime()
    .pipe( take(1) )
    .subscribe((data:UpdatedTime) => {
      this.ficticeUpdateTime = data.time.updated;
    });

    this.dollar.getBluePrice()
    .pipe( take(1) )
    .subscribe((data:DollarResponse) => {
      this.saleBlueUsdPrice = data.venta;
      this.buyBlueUsdPrice = data.compra;
    });


    this.dollar.getOficialPrice()
    .pipe( take(1) )
    .subscribe((data:DollarResponse) => {
      this.saleOficialUsdPrice = data.venta;
      this.buyOficialUsdPrice = data.compra;
    });    

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


  dollarTypeIsBlue(){
    return this.dollarTypeForm.get('radioDollarType')?.value === 'blue';
  }

  rotateCurrency(){
    this.arsToUsd = !this.arsToUsd;
  }
}
