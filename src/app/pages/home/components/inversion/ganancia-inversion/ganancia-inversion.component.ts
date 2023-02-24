import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private inversionInicial: number = 0;

  plazoDias:number = 0;

  inversionBehavior: BehaviorSubject<number> = new BehaviorSubject(0);

  getInversionObservable(){
    return this.inversionBehavior.asObservable();
  }
  setInversionObservable(num:number){
    this.inversionBehavior.next(num);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }
  
  agregarInversionInicial(event: Event){
    console.log(event);
    console.log((<HTMLInputElement>event.target).value);
    this.inversionInicial = Number((<HTMLInputElement>event.target).value);
  }

  plazoSeleccionado(event: Event){
    this.plazoDias = Number((<HTMLInputElement>event.target).value);
    this.plazo = (Number((<HTMLInputElement>event.target).value)) * 86400000;
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
    return this.ganancia = (this.inversionInicial * this.tasaInversion);
  }

  calcularTotal() {
    const plusMesesAcumulados = ( (this.plazoDias / 30) * 0.0037);
    return ( this.ganancia * (this.plazoDias / 30) ) + this.inversionInicial;
  }

  onInvertirButton(){
    this.setInversionObservable(this.inversionInicial);
  }

}
