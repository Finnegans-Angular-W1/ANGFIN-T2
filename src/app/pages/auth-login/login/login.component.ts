import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';
import { AuthState } from '../state/auth.state';
import { AlertState } from './../../../core/state/states/alertState/alert.state';
import { showAlert } from '../../../core/state/states/alertState/alert.actions';
import { showLoader } from 'src/app/core/state/states/loaderState/loader.actions';
import { Observable } from 'rxjs';
import { getDarkMode } from 'src/app/core/state/states/darkmodeState/darkmode.selectors';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  
  darkmode$: Observable<boolean>

  form: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private store:Store<AuthState | AlertState>
  ) {  
    this.darkmode$ = store.select(getDarkMode)
   }


  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['12345678', [Validators.required, Validators.minLength(6)]],
      email: ['exampleAdmin@gmail.com', [Validators.required, Validators.email]],
    });
  }

  get Password() {
    return this.form.get("password");
  }

  get Mail() {
    return this.form.get("email");
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false;
  }

  onEnviar() {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    if (this.form.valid) {
      this.store.dispatch(showLoader({message: 'Cargando...'}));
      this.store.dispatch(loginStart({email: this.Mail?.value, password: this.Password?.value}));
    } else {
      this.form.markAllAsTouched();
      this.store.dispatch(showAlert({ message: 'Formulario invalido', alertType: 'error' }));
    }
  }
}
