import { Output, Input, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent {
  
  @Input() section: number = 1;
  @Output() sectionChange = new EventEmitter<number>();
  showMenu:boolean = false;

  constructor() { }
  
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  onSectionChange(section: number){
    this.section = section;
    this.sectionChange.emit(section);
  }
}
