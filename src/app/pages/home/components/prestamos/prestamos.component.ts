import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {
  titlePrestamo : string = "Prestamo";
  private interes: number = 0.08;
  private iva: number = 0.21;
  private fechaActual = new Date ();

  //Mostrar contenido luego del click
  mostrarInfo:boolean = true;
  visible:boolean = false;
  deshabilitarBoton: boolean = false;
    
  private plazo!: number;
  private montoPrestamo !: number;
  private montoDisponible !: number

  infoPrestamo: Array<{nroCuota: number, saldo: number, montoInteres: number, 
      capital: number, montoInteresConIva: number, cuotaFinal: number}> = [];

  private cuotaFija !: number; //Es el valor de la cuota calculado por formula usando el monto del prestamo, el interes y el plazo

  constructor() { }

  ngOnInit(): void {
  }
  
  prestamo(event: Event) {
    this.montoPrestamo = Number((<HTMLInputElement>event.target).value);
  }

  plazoSeleccionado(event: Event) {
    this.plazo= (Number((<HTMLInputElement>event.target).value));
  }

  calcularFechaFinal(){
    if(this.plazo && this.montoPrestamo) { 
      let mFechaActual = this.fechaActual.setDate(this.fechaActual.getDate());
      let sumaMiliSegundos = new Date (mFechaActual + (this.plazo*2629800000));
      this.deshabilitarBoton = false;
      return sumaMiliSegundos.toLocaleDateString();
    }
      return;
  }
  
  calcularCuotaFija(){
    if(this.plazo && this.montoPrestamo) {
      this.cuotaFija = this.montoPrestamo / ((1 - (Math.pow((1+this.interes), (-this.plazo)))) / this.interes);
      return this.cuotaFija;
    }
    return;
  }
  
  rellenarArray(){
    this.montoDisponible = this.montoPrestamo;
    
    for (let i = 0; i < this.plazo; i++ ){
      this.infoPrestamo[i].nroCuota = i + 1;
      this.infoPrestamo[i].saldo = this.montoDisponible;
      this.infoPrestamo[i].capital = this.cuotaFija - (this.montoPrestamo * this.interes);
      this.infoPrestamo[i].montoInteres = this.montoPrestamo * this.interes;
      this.infoPrestamo[i].montoInteresConIva = this.infoPrestamo[i].montoInteres * this.iva;
      this.infoPrestamo[i].cuotaFinal = this.infoPrestamo[i].capital + this.infoPrestamo[i].montoInteres + this.infoPrestamo[i].montoInteresConIva;
      
      this.montoDisponible = this.montoDisponible - this.infoPrestamo[i].capital;
    } 
  }

  
  simularClick(): void{
    this.mostrarInfo = false; //not equal to condition
    this.visible = true;
  }
    
  cancelarClick(){
    this.mostrarInfo = true; //not equal to condition
    this.visible = false;
    this.deshabilitarBoton = true;
  }
  
}
