import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor() { }

  onLogout(){
    // Llamada al this.authService.logout()
    // Deberá borrar los datos, setear el estado y
    // redireccionar a la página de login.
  }
}
