import { NavMobileLink } from './../interfaces/nav-mobile-link';
import { NAV_SVGS } from './../constants/navLinks';
import { NavStaticLink } from './../interfaces/nav-static-link';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavLinksService {

  navStaticLinks: NavStaticLink[];
  navMobileLinks: NavMobileLink[];

  constructor() { 
    this.navMobileLinks = [
      {
        name: 'Inicio',
        link: '/inicio',
      },
      {
        name: 'Perfil',
        link: 'inicio/perfil',
      },
      {
        name: 'Divisas',
        link: 'inicio/divisas',
      },
      {
        name: 'Ingresos' ,
        link: 'inicio/ingresos',
      },
      {
        name: 'Egresos',
        link: 'inicio/egresos',
      },
      {
        name: 'Contactanos',
        link: 'TODOHacerModalContacto',
      },
    ];

    this.navStaticLinks = [
      {
        name: 'Home',
        link: '/inicio',
        svg: NAV_SVGS.home
      },
      {
        name: 'Perfil',
        link: 'inicio/perfil',
        svg: NAV_SVGS.profile
      },
      {
        name: 'Divisas',
        link: 'inicio/divisas',
        svg: NAV_SVGS.divisas
      },
      {
        name: 'Ingresos' ,
        link: 'inicio/ingresos',
        svg: NAV_SVGS.ingresos
      },
      {
        name: 'Egresos',
        link: 'inicio/egresos',
        svg: NAV_SVGS.egresos
      }
    ];

  }
}
