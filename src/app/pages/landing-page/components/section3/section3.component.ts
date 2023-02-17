import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  descTab1:string = '';
  descTab2:string = '';
  descTab3:string = '';

  featuresTab1:string[] = [];
  featuresTab2:string[] = [];
  featuresTab3:string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.descTab1 = `Nuestra wallet digital te ofrece la posibilidad de cambiar tus divisas de manera rápida y sencilla. Puedes convertir desde ARS a USD o viceversa en cuestión de segundos. Además, tenemos una tasa de cambio actualizada en tiempo real para que siempre obtengas la mejor oferta.`;
    this.descTab2 = `Con nuestra wallet digital, también puedes invertir en plazos fijos de manera segura y sencilla. Puedes elegir entre diversas opciones de plazo y tasa de interés para que encuentres la inversión que mejor se adapte a tus necesidades. Además, podrás monitorear tu inversión en tiempo real desde la comodidad de tu wallet.`;
    this.descTab3 = `Nuestra wallet digital te ofrece transacciones ilimitadas para que puedas enviar y recibir dinero sin restricciones. Ya sea para hacer compras, pagos o enviar dinero a tus seres queridos, podrás hacerlo de manera rápida y segura desde nuestra wallet. Además, nuestro sistema de seguridad de última generación garantiza la protección de tus transacciones en todo momento.`;

    this.featuresTab1 = ['Dolar Oficial', 'Dolar Blue', 'Cambio automático a tasa actual', 'Rapidez']
    this.featuresTab2 = ['Rentabilidad garantizada', 'Seguridad de inversión', 'Flexibilidad en plazos de inversión', 'Opciones personalizadas', 'Monitoreo constante']
    this.featuresTab3 = ['En cualquier momento y lugar', 'Con cualquier divisa', 'Sin límite de transacciones', 'Sin costos adicionales', 'Interfaz intuitiva y fácil de usar']
  }

}
