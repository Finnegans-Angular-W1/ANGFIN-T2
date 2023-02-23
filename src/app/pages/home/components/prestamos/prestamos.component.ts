import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {
  private ganancia!: number;
  private iva: number = 0.21;
  private fechaActual = new Date ();
  
  private plazo!: number;
  private fechaNueva !: Date;
  private montoPrestamo !: number;

  constructor() { }

  ngOnInit(): void {
  }
  
  prestamo(event: Event) {
    this.montoPrestamo = Number((<HTMLInputElement>event.target).value);
  }

  plazoSeleccionado(event: Event) {}

  calcularFechaFinal(){}

  calcularCuota(){}

  calcularTotal(){}

  
}
