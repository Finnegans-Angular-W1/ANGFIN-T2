import { TESTING_PROVIDERS } from './../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { RegisterRequest } from './../interfaces/registerRequest';

//NGRX
import { openModal } from './../../../shared/states/modalState/modal.actions';
import { showLoader } from 'src/app/core/state/states/loaderState/loader.actions';
import { registerStart } from './../../auth-login/state/auth.actions';

import { Store } from '@ngrx/store';

function setFormValues(component:RegistroComponent, formData:RegisterRequest) {
  const formControls = component.form.controls;
  formControls['first_name'].setValue(formData.first_name);
  formControls['last_name'].setValue(formData.last_name);
  formControls['password'].setValue(formData.password);
  formControls['email'].setValue(formData.email);
  formControls['conditionsTerms'].setValue(true);
}

//Mock Data Valid
const mockData = {
  first_name: 'Juan',
  last_name: 'Perez',
  password: 'password123',
  email: 'juan.perez@example.com'
};

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let store:Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      providers: [ TESTING_PROVIDERS ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();//"espiamos" el dispatch del store

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch openModal on init', () => {
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(openModal());
  });

  it('should validate form fields', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;


    const password = component.form.controls['password'];
    const email = component.form.controls['email'];
    const conditionsTerms = component.form.controls['conditionsTerms'];
  
    //MOCK DATA (INVALID)
    password.setValue('123');
    email.setValue('invalidEmail');
    conditionsTerms.setValue(false);

    component.form.markAllAsTouched();
    fixture.detectChanges();

    //Name and lastname not required
    expect(password.errors).not.toBeNull();//!toBeNull()  (Negado)
    expect(email.errors).not.toBeNull();
    expect(conditionsTerms.errors).not.toBeNull();
  });

  it('should dispatch loader in: onEnviar() function, and if the form is valid', ()=>{
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;

    //MOCK DATA (VALID)
    setFormValues(component, mockData);

    component.form.markAllAsTouched();
    fixture.detectChanges();

    // component.onEnviar();
    expect(store.dispatch).toHaveBeenCalledWith(showLoader({message: 'Cargando...'}));
  })

  it('should dispatch registerStart action in: onEnviar(), if the form is valid', ()=>{
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;

    //MOCK DATA (VALID)
    setFormValues(component, mockData);

    component.form.markAllAsTouched();
    fixture.detectChanges();
    component.onEnviar();
    expect(store.dispatch).toHaveBeenCalledWith(registerStart({ requestBody: mockData }));
    //TODO:SEGUIR
  });
    


});
