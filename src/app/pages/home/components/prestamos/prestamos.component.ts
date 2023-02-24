import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AlertState } from 'src/app/core/state/states/alertState/alert.state';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';

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
    
  private plazo!: number;
  private montoPrestamo !: number;
  private montoDisponible !: number
  private cuotaFija !: number; //Es el valor de la cuota calculado por formula usando el monto del prestamo, el interes y el plazo
  private totalPrestamo !: number;

  infoPrestamo: Array<{nroCuota: number, saldo: number, montoInteres: number, 
      capital: number, montoInteresConIva: number, cuotaFinal: number}> = [];

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private store:Store<AuthState | AlertState>
  ) {   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cantidadSolicitada: ['', [Validators.required, Validators.minLength(1)]],
      plazo: ['', [Validators.required]],
    });
  }
  
  /*prestamo(event: Event) {
    this.montoPrestamo = Number((<HTMLInputElement>event.target).value);
  }

  plazoSeleccionado(event: Event) {
    this.plazo= (Number((<HTMLInputElement>event.target).value));
  }*/

  getValorPrestamo(){
    return this.form.get("cantidadSolicitada");
  }

  getPlazo(){
    return this.form.get("plazo")
  }

  calcularFechaFinal(){
    if(this.form.valid) { 
      this.plazo = this.getPlazo()?.value
      let mFechaActual = this.fechaActual.setDate(this.fechaActual.getDate());
      let sumaMiliSegundos = new Date (mFechaActual + (this.plazo*2629800000));
      return sumaMiliSegundos.toLocaleDateString();
    }
      return;
  }
  
  calcularCuotaFija(){
    if(this.form.valid) {
      this.montoPrestamo = this.getValorPrestamo()?.value;
      this.cuotaFija = this.montoPrestamo / ((1 - (Math.pow((1+this.interes), (-this.plazo)))) / this.interes);
      return this.cuotaFija;
    }
    return;
  }
  calcularTotal (){
    this.plazo = this.getPlazo()?.value
    return this.totalPrestamo = this.cuotaFija * this.plazo;
  }

  rellenarArray(){
    this.montoDisponible = this.getValorPrestamo()?.value;
    
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

  
  simularClick(){
    this.mostrarInfo = false; //not equal to condition
    this.visible = true;

  }
    
  cancelarClick(){
    if (this.form.valid) {
      this.form.reset();
    }

    this.mostrarInfo = true; //not equal to condition
    this.visible = false;
   
  }
  
}
