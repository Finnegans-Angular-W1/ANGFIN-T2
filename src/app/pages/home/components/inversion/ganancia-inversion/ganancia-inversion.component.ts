import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';
import { getDarkMode } from 'src/app/core/state/states/darkmodeState/darkmode.selectors';
import { Account } from 'src/app/core/interfaces/account';
import { getAllTransactions } from 'src/app/core/state/states/transactionsState/transactions.actions';
import { getAccount } from 'src/app/core/state/states/accountState/account.selectors';

@Component({
  selector: 'app-ganancia-inversion',
  templateUrl: './ganancia-inversion.component.html',
  styleUrls: ['./ganancia-inversion.component.scss']
})
export class GananciaInversionComponent implements OnInit {
  private ganancia!: number;
  private tasaInversion: number = 0.07;
  private fechaActual = new Date ();

  darkmode$: Observable<boolean>

  //Mostrar contenido luego del click
  mostrarInfo:boolean = true;
  visible:boolean = false;
  
  private plazo!: number;
  inversionInicial: number = 0;

  plazoDias:number = 0;

  inversionBehavior: BehaviorSubject<any> = new BehaviorSubject({});

  form: FormGroup = new FormGroup({});
  
  money !:number;
  subAccount!:Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private store:Store<AuthState>
  ) {   this.darkmode$ = store.select(getDarkMode) }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      inversionInicial: ['', [Validators.required, Validators.minLength(1), Validators.min(1), Validators.max(5000000)]],
      plazo: ['', [Validators.required]],
    });

    /*this.store.dispatch(getAllTransactions());
    this.subAccount = this.store.select(getAccount)
    .subscribe( (account: Account) => {
      console.log('ACCOUNT RESPONSE', account);
      this.money = account.money;
    });*/
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

  clickProyectar(){
    this.setInversionObservable({
        plazodias: this.plazoDias,
        inversionInicial: this.inversionInicial,
        total: this.calcularTotal()
      });
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
    this.inversionInicial = 0;
  }
  
  clickInvertir(){
    console.log(this.getInversionInicial());
    if (Number (this.getInversionInicial()) > this.money){
      console.log("esto no se puede");
    } else {
      console.log("esto si se puede");
    }
  }

}
