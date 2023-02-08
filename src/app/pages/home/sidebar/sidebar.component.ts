import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  modalOpen=false;
  acceptModal=false;

  constructor() { }

  ngOnInit(): void {
  }

  actionModal(event:boolean){
    this.acceptModal = event;
  }

  openModal(){
    this.modalOpen = true;
  }


}
