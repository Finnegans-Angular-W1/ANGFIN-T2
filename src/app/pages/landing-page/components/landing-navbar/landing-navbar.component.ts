import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit {

  @Input() section: number = 1;

  constructor() { }

  ngOnInit(): void {

  }

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
