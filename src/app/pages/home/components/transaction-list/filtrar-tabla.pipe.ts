import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';

@Pipe({
  name: 'filtrarTabla'
})
export class FiltrarTablaPipe implements PipeTransform {

  transform(transaction: Transaction[], valorBuscado: string): Transaction[] {
    
    if (!transaction || !valorBuscado){
      return transaction;
    }
    return transaction.filter(trans => 
      trans.type.toLocaleLowerCase().includes(valorBuscado.toLocaleLowerCase()) ||
      trans.concept.toLocaleLowerCase().includes(valorBuscado.toLocaleLowerCase())
      );
  }

}
