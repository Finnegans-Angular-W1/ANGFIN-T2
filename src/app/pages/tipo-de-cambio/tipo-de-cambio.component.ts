import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDeCambio } from './tipo-de-cambio';
import { TipoDeCambioService } from './tipo-de-cambio.service';

@Component({
  selector: 'app-tipo-de-cambio',
  templateUrl: './tipo-de-cambio.component.html',
  styleUrls: ['./tipo-de-cambio.component.scss']
})
export class TipoDeCambioComponent implements OnInit {
  public tipoDeCambio: TipoDeCambio [] = [];

  constructor(private tipoDeCambioService: TipoDeCambioService) { }
    

  ngOnInit(): void {
    this.transa.getDolar().subscribe((res:any)=>{
      const dolaresFiltrados = res.filter((dolar:any) => dolar.casa.nombre === 'Blue' || dolar.casa.nombre === 'Mayorista Bancos' || dolar.casa.nombre === 'Dolar Contado con Liqui' || dolar.casa.nombre === 'Dolar Bolsa' && dolar.casa.nombre === 'Dolar MEP' && dolar.casa.nombre === 'Mayorista Bancos' && dolar.casa.nombre === 'Banco Nación Público' || dolar.casa.nombre === 'Dolar So');
      this.dolares = dolaresFiltrados;
      console.log(res);
    });
  }
      
}

  

