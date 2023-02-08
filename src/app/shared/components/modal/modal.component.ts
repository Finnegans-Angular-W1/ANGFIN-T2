import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { acceptModal, cancelModal, closeModal } from '../../states/modalState/modal.actions';
import { getModalOpen } from './../../states/modalState/modal.selectors';
import { ModalInfo } from './../../interfaces/modal';
import { ModalState } from './../../states/modalState/modal.state';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalInfo:ModalInfo = { paragraphs: [], title: '', subtitle: ''};

  open$:Observable<boolean>;

  constructor(
    private store:Store<ModalState>
  ) {
    this.open$ = this.store.select(getModalOpen);
  }

  ngOnInit(): void {

  }

  onCloseModal(){
    this.store.dispatch(cancelModal())
    this.store.dispatch(closeModal())
  }

  onAcceptModal(){
    this.store.dispatch(acceptModal())
    this.store.dispatch(closeModal())
  }

}
