import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestamo } from '../../interfaces/prestamo';

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
  
  prestamo: Prestamo[] = [];
  cuota: Prestamo = {
    nroCuota: 0,
    saldo: 0,
    montoInteres: 0,
    capital: 0,
    montoInteresConIva: 0,
    cuotaFinal: 0,
  }; 

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cantidadSolicitada: ['', [Validators.required, Validators.minLength(1), Validators.min(1), Validators.max(5000000)]],
      plazo: ['', [Validators.required]],
    });
  }
  
  getValorPrestamo(){
    return this.form.get("cantidadSolicitada");
  }

  getPlazo(){
    return this.form.get("plazo")
  }

  calcularFechaFinal(){
    if(this.form.valid) { 
      this.plazo = this.getPlazo()?.value;
      let mFechaActual = this.fechaActual.setDate(this.fechaActual.getDate());
      let sumaMiliSegundos = new Date (mFechaActual + (this.plazo*2629800000));
      return sumaMiliSegundos.toLocaleDateString();
    }
      return;
  }
  
  calcularCuotaFija(){
    var cuotaFija : number = 0; //Es el valor de la cuota calculado por formula usando el monto del prestamo, el interes y el plazo
    if(this.form.valid) {
      this.montoPrestamo = this.getValorPrestamo()?.value;
      cuotaFija = this.montoPrestamo / ((1 - (Math.pow((1+this.interes), (-this.plazo)))) / this.interes);
    }
    return cuotaFija;
  }
  calcularTotal (){
    var totalPrestamo : number = 0;
    this.plazo = this.getPlazo()?.value
    return totalPrestamo = this.calcularCuotaFija() * this.plazo;
  }

  simularClick(){
    this.mostrarInfo = false; //not equal to condition
    this.visible = true;
    
    this.prestamo = [];

    this.montoDisponible = this.getValorPrestamo()?.value;
    this.plazo = this.getPlazo()?.value;

    for (let i = 0 ; i < this.plazo ; i++ ){
      
      this.cuota.nroCuota = i + 1;
      this.cuota.saldo = this.montoDisponible;            
      this.cuota.capital = this.calcularCuotaFija() - (this.cuota.saldo * this.interes);
      this.cuota.montoInteres = this.montoDisponible * this.interes;
      this.cuota.montoInteresConIva = this.cuota.montoInteres * this.iva;
      this.cuota.cuotaFinal = this.cuota.capital + this.cuota.montoInteres + this.cuota.montoInteresConIva;     

      this.prestamo.push(this.cuota);

      this.montoDisponible  = this.cuota.saldo - this.cuota.capital;
      
      this.cuota = { nroCuota: 0,
                    saldo: 0,
                    montoInteres: 0,
                    capital: 0,
                    montoInteresConIva: 0,
                    cuotaFinal: 0,
      };

    }
    
  }
    
  cancelarClick(){
    if (this.form.valid) {
      this.form.reset();
    }

    this.mostrarInfo = true; //not equal to condition
    this.visible = false;
   
  }
  
}
