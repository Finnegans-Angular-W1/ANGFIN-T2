import { TESTING_MODULES, TESTING_PROVIDERS } from './../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import '@types/jest';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ TESTING_MODULES ],
      providers: [ TESTING_PROVIDERS ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
    });
    //Aca realizamos varias pruebas con respect con el email usando el errors del campo email

it('email field validity', () => {
  let errors = {};  
  let email = component.form.controls['email'];
  // Email field is required  
  errors = email.errors || {};
  // Set email to something  
  expect(errors['required']).toBeTruthy();  
  email.setValue('test');  
  errors = email.errors || {};
  expect(errors['pattern']).toBeTruthy();  
  expect(errors['required']).toBeFalsy();
  // Set email to something correct  
  email.setValue('test@example.com');  
  errors = email.errors || {};  
  expect(errors['required']).toBeFalsy();  
  expect(errors['pattern']).toBeFalsy();  
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.form.controls['password'];
    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
    // Set email to something
    password.setValue('123456');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();
    // Set email to something correct
    password.setValue('123456789');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    });

    //https://medium.com/@vito1986/angular-unit-testing-8a1479079f84
});
