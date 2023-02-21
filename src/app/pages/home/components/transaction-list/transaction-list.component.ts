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

  textoBuscado !: any;
  arrayFiltrado = []
  
  constructor(private transactionsService: TransactionsService) { } //, httpService: HttpService) { }

  ngOnInit() {
    //this.httpService.get<Transaction>("/transactions")
      //      .subscribe( (resp:any) => {
        //      console.log(resp);
          //    this.transaction = resp.data;
            //});

    this.transactionsService.getTransactions()
            .subscribe( (resp:any) => {
              console.log(resp);
              this.transaction = resp.data;
            });
  }
  
  opcionElegida(event: any){
    this.opcionFiltrado = event.target.value;

  }

  filtradoPorPalabra(){
    
  }

  filtradoPorOperacion(event: any){
    var operacionElegida = event.target.value;
    //const datosFiltrados = this.transaction.filter();
  }

}
