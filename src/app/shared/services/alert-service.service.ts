import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  //Para la simulación del boton - Start
  alertSource=new Subject(); 
  alert$= this.alertSource.asObservable(); //observador
  showMessage(myObjet:any){
    this.alertSource.next(myObjet);
  }
  //Para la simulación del boton - End
  constructor() { }

  //usar state
}
