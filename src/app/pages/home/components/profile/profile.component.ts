import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { ModalState } from 'src/app/shared/states/modalState/modal.state';
import { openModal } from 'src/app/shared/states/modalState/modal.actions';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  modalInfo = { title:'Edición del Usuario', subtitle:'' }
  constructor(private store: Store<ModalState> ) { }

  ngOnInit(): void {
  }

  openModal(){
    this.store.dispatch(openModal());
  }
}
