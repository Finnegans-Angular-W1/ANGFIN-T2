import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http:HttpClient) { 
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

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

  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault;

    if (this.form.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert('Todo salio bien ¡Enviar formulario!');
      this.http.post("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login",this.form.value).subscribe(res=>{
        console.log(res);
      })
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }

}
