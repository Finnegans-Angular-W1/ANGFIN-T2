import { NavMobileLink } from './../../interfaces/nav-mobile-link';
import { logout } from './../../../auth-login/state/auth.actions';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';
import { NavStaticLink } from './../../interfaces/nav-static-link';
import { NavLinksService } from './../../services/nav-links.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  //Acepten mis cambios
  navLinks:NavStaticLink[];
  navMobileLinks:NavMobileLink[];

  constructor(
    private navLinksService:NavLinksService,
    private store:Store<AuthState>
  ) {
    this.navMobileLinks = this.navLinksService.navMobileLinks;
    this.navLinks = this.navLinksService.navStaticLinks;
  }

  onLogout(){
//TODO: Modal preguntando si esta seguro de querer cerrar sesion
    this.store.dispatch(logout());
  }

}
