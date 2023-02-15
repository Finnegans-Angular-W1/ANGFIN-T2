import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-cargar-saldos',
  templateUrl: './cargar-saldos.component.html',
  styleUrls: ['./cargar-saldos.component.scss']
})
export class CargarSaldosComponent implements OnInit {
  
  constructor(private http: HttpService) {  
  }

  ngOnInit() {
  
  }
  
  onSubmit(event: Event){
     //this.http.postGeneric('/accounts/', body, idAccount);
  }
  

}
