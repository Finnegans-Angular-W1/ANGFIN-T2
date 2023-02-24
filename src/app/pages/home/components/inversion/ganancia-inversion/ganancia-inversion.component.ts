import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AlertState } from 'src/app/core/state/states/alertState/alert.state';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';

@Component({
  selector: 'app-ganancia-inversion',
  templateUrl: './ganancia-inversion.component.html',
  styleUrls: ['./ganancia-inversion.component.scss']
})
export class GananciaInversionComponent implements OnInit {
  private ganancia!: number;
  private tasaInversion: number = 0.07;
  private fechaActual = new Date ();

  //Mostrar contenido luego del click
  mostrarInfo:boolean = true;
  visible:boolean = false;
  deshabilitarBoton: boolean = true;
  
  private plazo!: number;
  private inversionInicial!: number;

  form: FormGroup = new FormGroup({});
  
  constructor(
    private formBuilder: FormBuilder,
    private store:Store<AuthState | AlertState>
  ) {   }


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
    if(this.plazo && this.inversionInicial) { 
      let mFechaActual = this.fechaActual.setDate(this.fechaActual.getDate());
      let sumaMiliSegundos = new Date (mFechaActual + this.plazo);
      this.deshabilitarBoton = false;
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

  simularClick(): void{
    this.mostrarInfo = false; //not equal to condition
    this.visible = true;    
  }

  cancelarClick(){
    this.mostrarInfo = true; //not equal to condition
    this.visible = false;
    this.deshabilitarBoton = true;
    this.inversionInicial = 0;

    
    
  }

}
