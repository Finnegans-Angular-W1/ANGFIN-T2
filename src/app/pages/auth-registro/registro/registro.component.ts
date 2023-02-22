import { RegisterRequest } from './../interfaces/registerRequest';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/core/state/app.state';
import { getModalAction } from './../../../shared/states/modalState/modal.selectors';
import { ModalInfo } from './../../../shared/interfaces/modal';
import { openModal } from 'src/app/shared/states/modalState/modal.actions';
import { registerStart } from './../../auth-login/state/auth.actions';
import { showAlert } from 'src/app/core/state/states/alertState/alert.actions';
import { showLoader } from 'src/app/core/state/states/loaderState/loader.actions';
import { TermsService } from './../services/terms.service';
import { adultAgeValidator } from './customValidators/adultage';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, OnDestroy {
  form: FormGroup;

  modalInfo:ModalInfo;
  subActionModal!:Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private terms:TermsService,
  ) { 
    this.modalInfo = this.terms.getModalInfo();

    this.form = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      bornDate: ['', [Validators.required, Validators.minLength(6),adultAgeValidator]],
      conditionsTerms: [false, [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {
    this.store.dispatch(openModal());
    this.subActionModal = this.store.select(getModalAction)
    .subscribe((action) => {
      console.log('action', action);
      if(action === 'accept'){
        this.form.get('conditionsTerms')?.setValue(true);
      }else if(action === 'cancel'){
        this.form.get('conditionsTerms')?.setValue(false);
        this.form.controls['conditionsTerms'].markAsTouched();
      }
    });
  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Apellido() {
    return this.form.get('apellido');
  }

  get Password() {
    return this.form.get('password');
  }

  get Mail() {
    return this.form.get('email');
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get Birthdate() {
    return this.form.get('bornDate');
  }

  get BirthdateValid(){
    if(this.form.get('bornDate')?.touched){
      return this.Birthdate?.hasError('age');
    }
    return this.Birthdate;
  }

  get MailValid() {
    return false;
  }
  
  get ConditionsTermsInvalid() {
    return this.form.get('conditionsTerms')?.touched && !this.form.get('conditionsTerms')?.valid;
  }

  onOpenModal(){
    this.store.dispatch(openModal());
  }

  onEnviar() {

    if (this.form.valid) {
      this.store.dispatch(showLoader({message: 'Cargando...'}));
      const registerRequest: RegisterRequest = {
        first_name: this.form.value.nombre,
        last_name: this.form.value.apellido,
        password: this.form.value.password,
        email: this.form.value.email
      };
      this.store.dispatch(registerStart({requestBody: registerRequest}));
    } else {
      this.store.dispatch(showAlert({message:'Complete los campos requeridos', alertType:'error'}));
      this.form.markAllAsTouched();
    }
  }

  ngOnDestroy(){
    this.subActionModal.unsubscribe();
  }

}