import { Injectable } from '@angular/core';

import { ModalInfo } from './../../../shared/interfaces/modal';

@Injectable({ providedIn: 'root' })
export class TermsService {

  private _termsTitle: string;
  private _termsParagraphs: string[];
  private _subtitle: string;

  constructor() { 
    this._termsTitle = 'Alkemy Bank';
    this._subtitle = 'Al regristarse y utilizar nuestra aplicación de wallet digital, aceptas cumplir con los siguientes términos y condiciones:'
    this._termsParagraphs = [
      'Te comprometes a proporcionar información veraz y precisa al momento de registrarte en nuestra plataforma. Cualquier información falsa o engañosa puede resultar en la cancelación de tu cuenta.',
      'Aceptas ser responsable de mantener la confidencialidad de tu contraseña y de cualquier actividad que ocurra en tu cuenta. Notificaremos inmediatamente a las autoridades relevantes en caso de detectar cualquier actividad sospechosa o ilegal en tu cuenta.',
      'Comprendes y aceptas que nuestra aplicación solo te proporciona un servicio de almacenamiento y gestión de criptomonedas, y que somos un tercero independiente a cualquier transacción que realices. No somos responsables de ninguna pérdida o daño que puedas sufrir como resultado de transacciones realizadas en nuestra plataforma.',
      'Aceptas que nuestra aplicación y sus contenidos son propiedad exclusiva de nuestra empresa y están protegidos por las leyes de propiedad intelectual. Está prohibido cualquier uso no autorizado de nuestra plataforma o contenido, incluyendo su reproducción, modificación, distribución o exhibición pública.'
    ]
  }

  getModalInfo():ModalInfo{
    const modalInfo:ModalInfo = {
      title: this._termsTitle,
      paragraphs: this._termsParagraphs,
      subtitle: this._subtitle
    }
    return {... modalInfo};
  }
}
