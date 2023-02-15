import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { acceptModal, cancelModal, closeModal } from '../../states/modalState/modal.actions';
import { getModalOpen } from './../../states/modalState/modal.selectors';
import { ModalInfo } from './../../interfaces/modal';
import { ModalState } from './../../states/modalState/modal.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() modalInfo:ModalInfo = { paragraphs: [], title: '', subtitle: ''};
  formModal: boolean = true;
  formEditUser: FormGroup;
  open$:Observable<boolean>;

  constructor( private store:Store<ModalState>, private fb: FormBuilder ) {
    this.open$ = this.store.select(getModalOpen);
    this.formEditUser = this.fb.group({
      nombre: ['', [Validators.minLength(3)]],
      nombreUsuario: ['', [Validators.minLength(5)]],
    })
  }

  onCloseModal(){
    this.store.dispatch(cancelModal());
    this.store.dispatch(closeModal());
  }

  onAcceptModal(){
    this.store.dispatch(acceptModal());
    this.store.dispatch(closeModal());
  }

  onSubmit(event:any){
    console.log(event)
    /* this.store.dispatch() */
  }

}
