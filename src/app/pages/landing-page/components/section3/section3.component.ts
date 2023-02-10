import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  descTab1:string;
  descTab2:string = '';
  descTab3:string = '';

  featuresTab1:string[] = ['Dolar Oficial', 'Dolar Blue', 'Cambio automático a tasa actual'];
  


  constructor() {
    this.descTab1 = `Nuestra wallet digital te ofrece la posibilidad de cambiar tus divisas de manera rápida y sencilla. Puedes convertir desde ARS a USD o viceversa en cuestión de segundos. Además, tenemos una tasa de cambio actualizada en tiempo real para que siempre obtengas la mejor oferta.`;
  }

  ngOnInit(): void {
  }

}
