import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganancia-inversion',
  templateUrl: './ganancia-inversion.component.html',
  styleUrls: ['./ganancia-inversion.component.scss']
})
export class GananciaInversionComponent implements OnInit {
  private ganancia!: number;
  private tasaInversion: number = 0.07;
  private fechaActual = new Date ();
  
  private plazo!: number;
  private fechaNueva !: Date;
  private inversionInicial!: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    ;   
  }
  
  agregarInversionInicial(event: Event){
    this.inversionInicial = Number((<HTMLInputElement>event.target).value);
  }

  plazoSeleccionado(event: Event){
    this.plazo= (Number((<HTMLInputElement>event.target).value))*86400000;
  }

  calcularFechaFinal(){
    if(this.plazo) { 
      let mFechaActual = this.fechaActual.setDate(this.fechaActual.getDate());
      let sumaMiliSegundos = new Date (mFechaActual + this.plazo);
      return sumaMiliSegundos.toLocaleDateString();
    }
      return;
  }

  calcularGanancia(){
    return this.ganancia = (this.inversionInicial*this.tasaInversion);
  }

  calcularTotal() {
    return this.ganancia + this.inversionInicial;
  }

}
