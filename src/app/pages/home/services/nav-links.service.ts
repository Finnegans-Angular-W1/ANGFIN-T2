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
        name: 'Home',
        link: '/home',
      },
      {
        name: 'Perfil',
        link: 'home/profile',
      },
      {
        name: 'Divisas',
        link: 'home/divisas',
      },
      {
        name: 'Ingresos' ,
        link: 'home/ingresos',
      },
      {
        name: 'Egresos',
        link: 'home/egresos',
      },
      {
        name: 'Contactanos',
        link: 'TODOHacerModalContacto',
      },
    ];

    this.navStaticLinks = [
      {
        name: 'Home',
        link: '/home',
        svg: NAV_SVGS.home
      },
      {
        name: 'Perfil',
        link: 'home/profile',
        svg: NAV_SVGS.profile
      },
      {
        name: 'Divisas',
        link: 'home/divisas',
        svg: NAV_SVGS.divisas
      },
      {
        name: 'Ingresos' ,
        link: 'home/ingresos',
        svg: NAV_SVGS.ingresos
      },
      {
        name: 'Egresos',
        link: 'home/egresos',
        svg: NAV_SVGS.egresos
      }
    ];

  }
}
