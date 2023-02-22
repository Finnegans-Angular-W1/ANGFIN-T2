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

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  //Acepten mis cambios
  navLinks:NavStaticLink[];
  navMobileLinks:NavMobileLink[];

  checkboxControl:FormControl = new FormControl(false);

  checkboxMobile:FormControl = new FormControl(false);
  openMobileMenu:boolean = false;

  constructor(
    private navLinksService:NavLinksService,
    private store:Store<AuthState | DarkModeState>
  ) {
    this.navMobileLinks = this.navLinksService.navMobileLinks;
    this.navLinks = this.navLinksService.navStaticLinks;
  }

  onLogout(){
//TODO: Modal preguntando si esta seguro de querer cerrar sesion
    this.store.dispatch(logout());
  }

  switchMobile(){
    if( this.checkboxMobile.value ){
      this.openMobileMenu = true;
    }else{
      this.openMobileMenu = false;
    }
  }

  switchDarkMode(){
    if( this.checkboxControl.value ){
      this.store.dispatch(darkModeON());
    }else{
      this.store.dispatch(darkModeOFF());
    }
  }

}
