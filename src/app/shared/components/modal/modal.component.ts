import { Component, Input } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';

import { acceptModal, cancelModal, closeModal } from '../../states/modalState/modal.actions';
import { getModalOpen } from './../../states/modalState/modal.selectors';
import { ModalInfo } from './../../interfaces/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/app/core/state/app.state';
import { editProfileStart } from 'src/app/pages/auth-login/state/auth.actions';
import { showLoader } from 'src/app/core/state/states/loaderState/loader.actions';
import { User } from 'src/app/core/interfaces/User';
import { getUser } from 'src/app/pages/auth-login/state/auth.selectors';
import { BodyRequest } from 'src/app/pages/auth-login/interfaces/body-request';
import { showAlert } from 'src/app/core/state/states/alertState/alert.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})


export class ModalComponent {
  @Input() modalInfo:ModalInfo = { paragraphs: [], title: '', subtitle: ''};
  @Input() formModal:boolean = false;
  formEditUser: FormGroup;
  open$:Observable<boolean>;


  constructor( private store:Store<AppState>, private fb: FormBuilder) {
    this.open$ = this.store.select(getModalOpen);

    this.formEditUser = this.fb.group({
      nombre: ['', [Validators.minLength(3), Validators.required]],
      nombreUsuario: ['', [Validators.minLength(5), Validators.required]],
      password: ['', [Validators.minLength(5), Validators.required]]
    });
  }

  onCloseModal(){
    this.store.dispatch(cancelModal());
    this.store.dispatch(closeModal());
  }

  onAcceptModal(){
    this.store.dispatch(acceptModal());
    this.store.dispatch(closeModal());
  }

  onSubmit(){
    if (this.formEditUser.valid){
      this.store.dispatch(showLoader({ message: "cargando" }));
      console.log('ENTRE EN CONDICION');
      let auxData: BodyRequest = { userName: (this.formEditUser.controls['nombreUsuario'].value as string), name: (this.formEditUser.controls['nombre'].value as string), }
      this.store.select(getUser).pipe(
        take(1)
      ).subscribe( (user:User) => {
        const updateUser:any = {
          first_name: auxData.name,
          last_name: auxData.userName,
          email: user.email,
          password: this.formEditUser.controls['password'].value,
          points: user.points,
          roleId: 2,
        }
        this.store.dispatch(editProfileStart({ updateUser, id:user.id}) )
      });
    }
    else{
      this.store.dispatch(showAlert({ message: `La edición no ha podido realizarse`, alertType: 'error' }))
    }
  }

}
