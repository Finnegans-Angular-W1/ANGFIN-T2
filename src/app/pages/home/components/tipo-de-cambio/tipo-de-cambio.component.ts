import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Casa } from '../../interfaces/tipo-de-cambio';
import { TipoDeCambioService } from '../../services/tipo-de-cambio.service';

@Component({
  selector: 'app-tipo-de-cambio',
  templateUrl: './tipo-de-cambio.component.html',
  styleUrls: ['./tipo-de-cambio.component.scss']
})
export class TipoDeCambioComponent implements OnInit {
  dolares:any[] = [];
  
  constructor(private transa: TipoDeCambioService) { }
    

  ngOnInit(): void {
    this.transa.getDolar().subscribe((res:any)=>{
      const dolaresFiltrados = res.filter((dolar:any) => dolar.casa.nombre === 'Blue' || dolar.casa.nombre === 'Oficial' );
      this.dolares = dolaresFiltrados;
    });
  } 
      
}




  

