import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-renew-password",
  templateUrl: "./renew-password.component.html",
  styleUrls: ["./renew-password.component.scss"],
})
export class PasswordResetComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      password2: ["", [Validators.required, Validators.minLength(8)]],

      Validators: this.equalPassword("password", "password2"),
    });
  }

  equalPassword(pass: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const passControl = formGroup.get(pass);
      const pass2Control = formGroup.get(pass2);

      if (passControl?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ notIgual: true });
      }
    };
  }

  ngOnInit(): void {}

  get emailNoValido() {
    return (
      this.formulario.get("email")?.invalid &&
      this.formulario.get("email")?.touched
    );
  }

  get passwordNoValido() {
    return (
      this.formulario.get("password")?.invalid &&
      this.formulario.get("password")?.touched
    );
  }

  get password2NoValido() {
    return (
      this.formulario.get("password2")?.invalid &&
      this.formulario.get("password2")?.touched
    );
  }

  get emailValido() {
    return false;
  }
  resetPassword(event: Event) {
    event.preventDefault;

    if (this.formulario.valid) {
      console.log("ok");
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
