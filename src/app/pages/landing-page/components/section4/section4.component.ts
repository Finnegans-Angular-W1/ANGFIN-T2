import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  questions:any = [];

  constructor() { 
    this.questions = [
      {
        question: '¿Qué es una wallet digital?',
        description: 'Una wallet digital es una aplicación que te permite almacenar y administrar tus criptomonedas de manera segura y sencilla. Además, te permite realizar transacciones de manera rápida y segura.'
      },
      {
        question: '¿Es seguro guardar mis fondos?',
        description: 'Sí, las wallets digitales utilizan tecnologías de encriptación avanzadas para garantizar la seguridad de tus fondos y información personal. Además, cuentan con protecciones adicionales como autenticación de dos factores para prevenir fraudes.'
      },
      {
        question: '¿Cómo puedo registrarme?',
        description: 'Simplemente siga los pasos en nuestra página web y proporcione los detalles requeridos, como nombre, dirección de correo electrónico y información bancaria. Luego de completar la verificación de identidad, estarás listo para comenzar a utilizar tu wallet digital.'
      },
      {
        question: '¿Cómo puedo enviar y recibir dinero?',
        description: 'Para enviar dinero, simplemente ingrese la dirección de la wallet a la que desea enviar el dinero y la cantidad que desea enviar. Luego, confirme la transacción y listo. Para recibir dinero, simplemente proporcione su dirección de wallet a la persona que desea recibir el dinero y listo.'
      },
      {
        question: '¿Cómo puedo cambiar divisas?',
        description: 'Para cambiar divisas, ingrese a la seccion divisas y determina la cantidad de dinero que desea cambiar y seleccione la divisa a la que desea cambiar. Luego, confirme la transacción y listo. Nuestra wallet digital te ofrece la posibilidad de cambiar tus divisas de manera rápida y sencilla. Puedes convertir desde ARS a USD o viceversa en cuestión de segundos. Además, tenemos una tasa de cambio actualizada en tiempo real para que siempre obtengas la mejor oferta.'
      },
      {
        question: '¿Qué pasa si pierdo mi dispositivo o tengo problemas con mi cuenta?',
        description: 'En caso de pérdida de dispositivo o problemas con tu cuenta, por favor contáctanos inmediatamente. Te guiaremos en el proceso para recuperar tus fondos y proteger tu información personal.'
      }
    ]
  }

  ngOnInit(): void {
  }

}
