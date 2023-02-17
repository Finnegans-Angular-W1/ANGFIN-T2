import { showAlert } from '../../../core/state/states/alertState/alert.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';
import { AuthState } from '../state/auth.state';
import { AlertState } from '../../../core/state/states/alertState/alert.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private store:Store<AuthState | AlertState>
  ) {   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    });
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

  onEnviar() {
    if (this.form.valid) {
      this.store.dispatch(loginStart({email: this.Mail?.value, password: this.Password?.value}));
    } else {
      this.form.markAllAsTouched();
      this.store.dispatch(showAlert({ message: 'Formulario invalido', alertType: 'error' }));
    }
  }

}
