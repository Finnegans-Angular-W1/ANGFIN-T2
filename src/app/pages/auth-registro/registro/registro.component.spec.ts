import { showAlert } from './../../../core/state/states/alertState/alert.actions';
import { TESTING_PROVIDERS } from './../../../spec/constants';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { RegisterRequest } from './../interfaces/registerRequest';

//NGRX
import { openModal, acceptModal } from './../../../shared/states/modalState/modal.actions';
import { showLoader } from 'src/app/core/state/states/loaderState/loader.actions';
import { registerStart } from './../../auth-login/state/auth.actions';

import { Store } from '@ngrx/store';


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
    fixture.detectChanges();

    //Name and lastname not required
    const password = component.form.controls['password'];
    const email = component.form.controls['email'];
    const conditionsTerms = component.form.controls['conditionsTerms'];
  
    //MOCK DATA (INVALID)
    password.setValue('123');
    email.setValue('invalidEmail');
    conditionsTerms.setValue(false);

    component.form.markAllAsTouched();
    component.onEnviar();
    fixture.detectChanges();

    expect(password.errors).not.toBeNull();//!toBeNull()  (Negado)
    expect(email.errors).not.toBeNull();
    expect(conditionsTerms.errors).not.toBeNull();
  });

  it('should dispatch loader in: onEnviar() function, and if the form is valid', ()=>{
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    //MOCK DATA (VALID)
    const password = component.form.controls['password'];
    const email = component.form.controls['email'];
    const conditionsTerms = component.form.controls['conditionsTerms'];

    password.setValue('password123');
    email.setValue('juanperez@gmail.com');
    conditionsTerms.setValue(true);

    component.form.markAllAsTouched();
    component.onEnviar();

    fixture.detectChanges();
    
    expect(store.dispatch).toHaveBeenCalledWith(showLoader({message: 'Cargando...'}));
  })

  it('should dispatch registerStart action in: onEnviar(), if the form is valid', ()=>{
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const requestBody:RegisterRequest = mockData;
    //MOCK DATA (VALID)
    component.form.controls['nombre'].setValue(mockData.first_name)
    component.form.controls['apellido'].setValue(mockData.last_name);
    component.form.controls['password'].setValue(mockData.password);
    component.form.controls['email'].setValue(mockData.email);
    component.form.controls['conditionsTerms'].setValue(true);
    component.form.markAllAsTouched();
    component.onEnviar();

    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(registerStart({ requestBody }));
  });
    
  it('should disabled button if form is invalid', ()=>{
    const elementRef = fixture.debugElement.query(By.css('.form-control button'));
    const getInnerTextButton = elementRef.nativeElement;

    //MOCK DATA (INVALID)
    component.form.controls['password'].setValue('123')
    component.form.controls['email'].setValue('invalidEmailasdawd');
    component.form.controls['conditionsTerms'].setValue(false);
    component.form.markAllAsTouched();

    fixture.detectChanges();
    expect(getInnerTextButton.disabled).toBeTrue();
  });    

  it('should not disabled button if form is valid', ()=>{
    const elementRef = fixture.debugElement.query(By.css('.form-control button'));
    const getInnerTextButton = elementRef.nativeElement;

    //MOCK DATA (VALID)
    component.form.controls['nombre'].setValue(mockData.first_name)
    component.form.controls['apellido'].setValue(mockData.last_name);
    component.form.controls['password'].setValue(mockData.password);
    component.form.controls['email'].setValue(mockData.email);
    component.form.controls['conditionsTerms'].setValue(true);
    component.form.markAllAsTouched();
    fixture.detectChanges();

    expect(getInnerTextButton.disabled).toBeFalse();
  });

  it('should dispatch showAlert action in: onEnviar(), if the form is invalid', ()=>{
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    //MOCK DATA (INVALID)
    component.form.controls['password'].setValue('123')
    component.form.controls['email'].setValue('invalidEmailasdawd');
    component.form.controls['conditionsTerms'].setValue(false);
    component.form.markAllAsTouched();
    component.onEnviar();

    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(showAlert({message:'Complete los campos requeridos', alertType:'error'}));
  });

  it('should mark all fields as touched in: onEnviar(), if the form is invalid', ()=>{
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    //MOCK DATA (INVALID)
    component.form.controls['password'].setValue('123')
    component.form.controls['email'].setValue('invalidEmailasdawd');
    component.form.controls['conditionsTerms'].setValue(false);
    component.onEnviar();

    fixture.detectChanges();
    expect(component.form.controls['password'].touched).toBeTrue();
    expect(component.form.controls['email'].touched).toBeTrue();
    expect(component.form.controls['conditionsTerms'].touched).toBeTrue();
  });

  it('should unsubscribe subActionModal on destroy', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const spyUnsubscribe = spyOn(component.subActionModal, 'unsubscribe');
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(spyUnsubscribe).toHaveBeenCalled();
  });

  it('should return true when conditionsTerms are touched and invalid, getConditionsTermsInvalid()', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;
    const conditionsTerms = component.form.controls['conditionsTerms'];

    conditionsTerms.markAsTouched();
    conditionsTerms.setErrors({required: true});
    fixture.detectChanges();

    expect(component.ConditionsTermsInvalid).toBeTrue();
  });

  it('should return false when conditionsTerms are touched and valid, getConditionsTermsInvalid()', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const conditionsTerms = component.form.controls['conditionsTerms'];
    conditionsTerms.markAsTouched();
    //VALID DATA
    conditionsTerms.setValue(true);
    fixture.detectChanges();
    expect(component.ConditionsTermsInvalid).toBeFalse();
  });

});
