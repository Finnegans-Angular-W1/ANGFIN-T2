import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Transaction } from '../../interfaces/transaction';

import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transaction: Transaction[] = [];
  opcionFiltrado !: string;

  private apiUrl: string = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com' ;

  textoBuscado !: any;
  arrayFiltrado = []

  form: FormGroup = new FormGroup({});
  
  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }  

  ngOnInit() {
    this.httpService.get<Transaction>(this.apiUrl + "/transactions")
        .subscribe( (resp:any) => {
        console.log(resp);
        this.transaction = resp.data;
      });

    this.form = this.formBuilder.group({
      selectorInicial: ['', [Validators.required]],
      palabra: ['', [Validators.required]],
      operacion: ['', [Validators.required]]
    });
  }
  
  opcionElegida(event: any){
    this.opcionFiltrado = event.target.value;
  }

  getOpcionInicial(){
    this.form.get("selectorInicial");
  }

  getPalabra() {
    this.form.get("palabra");
  }

  getOperacion(){
    this.form.get("operacion")
  }

  filtradoPorPalabra(){ // event: any (oninput)="filtradoPorPalabra($event)"
    //var operacionElegida = String ((<HTMLInputElement>event.target).value);
    
    const arrayFiltrado = this.transaction.filter(function (funcion){
      return funcion.concept //= //operacionElegida;
    });
    console.log(arrayFiltrado);
  }

  filtradoPorOperacion(event: any){
    var operacionElegida = event.target.value;
    const arrayFiltrado = this.transaction.filter(function (funcion){
      return funcion.type = operacionElegida;
    });
    console.log(arrayFiltrado);
  }

  filtrarTabla(event: any){
    if (this.opcionFiltrado ==  "palabraOption"){
      this.filtradoPorPalabra(); //event
    } else {
      this.filtradoPorOperacion(event);
    }
  }

  openEdit:boolean = false;

  idBehaviorSubject = new BehaviorSubject<number>(0);

  getIdObservable(){
    return this.idBehaviorSubject.asObservable();
  }

  openEditModal(id:number){
    this.idBehaviorSubject.next(id);
    this.openEdit = true;
  }

}
