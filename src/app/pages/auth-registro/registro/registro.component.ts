import { getModalAction } from './../../../shared/states/modalState/modal.selectors';
import { TermsService } from './../services/terms.service';
import { ModalInfo } from './../../../shared/interfaces/modal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ModalState } from './../../../shared/states/modalState/modal.state';
import { openModal } from 'src/app/shared/states/modalState/modal.actions';
import { Subscription } from 'rxjs';

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
    private store: Store<ModalState>,
    private terms:TermsService
  ) { 
    this.modalInfo = this.terms.getModalInfo();

    this.form = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
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

  get MailValid() {
    return false;
  }
  
  get ConditionsTermsValid() {
    return this.form.get('conditionsTerms')?.touched && !this.form.get('conditionsTerms')?.valid;
  }

  onOpenModal(){
    this.store.dispatch(openModal());
  }

  onEnviar(event: Event) {

    event.preventDefault;

    if (this.form.valid) {

      alert('Todo salio bien ¡Enviar formulario!');
    } else {

      this.form.markAllAsTouched();
    }
  }

  ngOnDestroy(){
    this.subActionModal.unsubscribe();
  }

}