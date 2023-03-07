import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Casa } from '../../interfaces/tipo-de-cambio';
import { DollarService } from '../../services/dollar.service';
import { TipoDeCambioService } from '../../services/tipo-de-cambio.service';
import { DollarResponse } from '../../interfaces/dollarBlueResponse';
import { UpdatedTime } from '../../interfaces/updatedTimeResponse';
import { take } from 'rxjs';

@Component({
  selector: 'app-tipo-de-cambio',
  templateUrl: './tipo-de-cambio.component.html',
  styleUrls: ['./tipo-de-cambio.component.scss']
})
export class TipoDeCambioComponent implements OnInit {
  /*dolares:any[] = [];
  
   constructor(private transa: TipoDeCambioService) { }
    

  ngOnInit(): void {
    this.transa.getDolar().subscribe((res:any)=>{
      const dolaresFiltrados = res.filter((dolar:any) => dolar.casa.nombre === 'Blue' || dolar.casa.nombre === 'Oficial' );
      this.dolares = dolaresFiltrados;
    });
  } 
      
} */
saleBlueUsdPrice: number = 0;
buyBlueUsdPrice: number = 0;

saleOficialUsdPrice: number = 0;
buyOficialUsdPrice: number = 0;

ficticeUpdateTime:string = '';


constructor(private dollar: DollarService) { }
    

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
      
}



  
}
