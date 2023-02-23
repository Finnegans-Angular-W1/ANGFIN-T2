import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Transaction } from '../../interfaces/transaction';
import { TransactionsService } from '../../services/transactions.service';


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
  
  constructor(private httpService: HttpService, private transactionsService: TransactionsService) { }  

  ngOnInit() {
      //this.transactionsService.getTransactions()
        // .subscribe( (resp:any) => {
          // console.log(resp);
         // this.transaction = resp.data;
         // });

     this.httpService.get<Transaction>(this.apiUrl + "/transactions")
         .subscribe( (resp:any) => {
         console.log(resp);
          this.transaction = resp.data;
        });
  }
  
  opcionElegida(event: any){
    this.opcionFiltrado = event.target.value;
  }

  filtradoPorPalabra(event: any){
    var operacionElegida = event.target.value;
    const arrayFiltrado = this.transaction.filter(function (funcion){
      return funcion.concept = operacionElegida;
    });
  }

  filtradoPorOperacion(event: any){
    var operacionElegida = event.target.value;
    const arrayFiltrado = this.transaction.filter(function (funcion){
      return funcion.type = operacionElegida;
    });
  }

  filtrarTabla(event: any){
    if (this.opcionFiltrado ==  "palabraOption"){
      this.filtradoPorPalabra(event);
    } else {
      this.filtradoPorOperacion(event);
    }
  }

}
