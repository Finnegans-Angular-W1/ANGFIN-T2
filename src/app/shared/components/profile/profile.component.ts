import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { openModal } from '../../states/modalState/modal.actions';
import { ModalState } from '../../states/modalState/modal.state';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private store: Store<ModalState> ) { }

  ngOnInit(): void {
  }

  openModal(){
    this.store.dispatch(openModal());
  }
}
