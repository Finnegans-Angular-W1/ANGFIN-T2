import { ModalState } from 'src/app/shared/states/modalState/modal.state';
import { darkModeON, darkModeOFF } from './../../../../core/state/states/darkmodeState/darkmode.actions';
import { FormControl } from '@angular/forms';
import { DarkModeState } from './../../../../core/state/states/darkmodeState/darkmode.state';
import { NavMobileLink } from './../../interfaces/nav-mobile-link';
import { logout } from './../../../auth-login/state/auth.actions';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';
import { NavStaticLink } from './../../interfaces/nav-static-link';
import { NavLinksService } from './../../services/nav-links.service';
import { Component} from '@angular/core';
import { openModal } from 'src/app/shared/states/modalState/modal.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  //Acepten mis cambios
  navLinks:NavStaticLink[];
  navMobileLinks:NavMobileLink[];


  checkboxMobile:FormControl = new FormControl(false);
  openMobileMenu:boolean = false;

  constructor(
    private navLinksService:NavLinksService,
    private store:Store<AuthState | DarkModeState | ModalState>
  ) {
    this.navMobileLinks = this.navLinksService.navMobileLinks;
    this.navLinks = this.navLinksService.navStaticLinks;
  }

  onLogout(){
//TODO: Modal preguntando si esta seguro de querer cerrar sesion
    this.store.dispatch(logout());
  }

  openModalEditProfile(){
    this.store.dispatch(openModal());
  }

  switchMobile(){
    this.openMobileMenu = this.checkboxMobile.value ? true : false;
  }

  checkboxControl:FormControl = new FormControl(false);
  switchDarkMode(){
    this.checkboxControl.value ? this.store.dispatch(darkModeON()) : this.store.dispatch(darkModeOFF());
  }

}
