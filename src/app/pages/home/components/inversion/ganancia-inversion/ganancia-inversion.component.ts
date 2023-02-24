import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  private plazo!: number;
  inversionInicial: number = 0;

  plazoDias:number = 0;

  inversionBehavior: BehaviorSubject<any> = new BehaviorSubject({});

  form: FormGroup = new FormGroup({});
  
  constructor(
    private formBuilder: FormBuilder,
    private store:Store<AuthState | AlertState>
  ) {   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      inversionInicial: ['', [Validators.required, Validators.minLength(1)]],
      plazo: ['', [Validators.required]],
    });
  }

  getInversionObservable(){
    return this.inversionBehavior.asObservable();
  }
  setInversionObservable(obj:any){
    this.inversionBehavior.next(obj);
  }
  
  getInversionInicial(){
    return this.form.get("inversionInicial");
  }
  
  getPlazo(){
    return this.form.get("plazo")
  }
  //agregarInversionInicial(event: Event){
    //console.log(event);
    //console.log((<HTMLInputElement>event.target).value);
    //this.inversionInicial = Number((<HTMLInputElement>event.target).value);
  //}

  //plazoSeleccionado(event: Event){
    //this.plazoDias = Number((<HTMLInputElement>event.target).value);
    //this.plazo = (Number((<HTMLInputElement>event.target).value)) * 86400000;
    
  //}

  calcularFechaFinal(){
    if(this.form.valid) { 
      this.plazo = (Number(this.getPlazo()?.value)) * 86400000;
      let mFechaActual = this.fechaActual.setDate(this.fechaActual.getDate());
      let sumaMiliSegundos = new Date (mFechaActual + this.plazo);
      return sumaMiliSegundos.toLocaleDateString();
    }
      return;
  }

  calcularGanancia(){
    this.inversionInicial=this.getInversionInicial()?.value
    return this.ganancia = (this.inversionInicial * this.tasaInversion);
  }

  calcularTotal() {
    this.plazoDias = this.getPlazo()?.value;
    this.inversionInicial = this.getInversionInicial()?.value
    const plusMesesAcumulados = ( (this.plazoDias / 30) * 0.0037);
    return ( this.ganancia * (this.plazoDias / 30) ) + this.inversionInicial + plusMesesAcumulados;
  }

  onInvertirButton(){
    this.setInversionObservable({
        plazodias: this.plazoDias,
        inversionInicial: this.inversionInicial,
        total: this.calcularTotal()
      });
  }

  simularClick(){
    this.setInversionObservable({
      plazodias: this.plazoDias,
      inversionInicial: this.inversionInicial,
      total: this.calcularTotal()
    });

    this.mostrarInfo = false; //not equal to condition
    this.visible = true;    
    
  }

  cancelarClick(){
    if (this.form.valid) {
      this.form.reset();
    }

    this.mostrarInfo = true; //not equal to condition
    this.visible = false;
    this.inversionInicial = 0;


  }

}
