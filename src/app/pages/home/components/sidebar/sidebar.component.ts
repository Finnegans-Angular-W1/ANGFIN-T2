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
<<<<<<< HEAD:src/app/pages/home/components/sidebar/sidebar.component.ts

  modalOpen=false;
  acceptModal=false;
=======
>>>>>>> 6ac9f96e8013dbd58084f542248f16a160ca306c:src/app/pages/home/sidebar/sidebar.component.ts
}
