import { TESTING_MODULES, TESTING_PROVIDERS } from './../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { showLoader } from 'src/app/core/state/states/loaderState/loader.actions';
import { Store } from '@ngrx/store';
import { showAlert } from 'src/app/core/state/states/alertState/alert.actions';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store:Store;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ TESTING_MODULES ],
      providers: [ TESTING_PROVIDERS ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture.detectChanges();
  });
  const mockForm={
    email: 'usuario@test.com',
    password: 'abc123'
  }
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.form).toBeTruthy();
  });

  it('invalid form login',()=>{
    
    const emailForm = component.form.get('email');
    const passwordForm = component.form.get('password');

    emailForm?.setValue('invalidEmail123');
    passwordForm?.setValue('abc');
    
    expect(component.form.invalid).toBeTrue();
  });

  it('valid form login',()=>{
    const emailForm = component.form.get('email');
    const passwordForm = component.form.get('password');

    emailForm?.setValue(mockForm.email);
    passwordForm?.setValue(mockForm.password);
    
    expect(component.form.invalid).toBeFalse();
  });

  it('button with word value "Iniciar Sesión"',()=>{
    //TODO: Este test, sirve para saber que está el button,
    //TODO: ya que la lógica, esta en el servicio
    const elementRef = fixture.debugElement.query(By.css('.form-control button'));
    
    const getInnerTextButton = elementRef.nativeElement.innerText;
    
    expect(getInnerTextButton).toEqual('INICIAR SESIÓN');
  });
  
    it('should not disabled button if form is valid', ()=>{
    const elementRef = fixture.debugElement.query(By.css('.form-control button'));
    const getInnerTextButton = elementRef.nativeElement;

    component.form.controls['email'].setValue(mockForm.email)
    component.form.controls['password'].setValue(mockForm.password);
    component.form.markAllAsTouched();
    fixture.detectChanges();

    expect(getInnerTextButton.disabled).toBeFalse();
  });
  it('should disabled button if form is invalid', ()=>{
    const elementRef = fixture.debugElement.query(By.css('.form-control button'));
    const getInnerTextButton = elementRef.nativeElement;

    component.form.controls['email'].setValue('emailFail')
    component.form.controls['password'].setValue('123');
    component.form.markAllAsTouched();
    fixture.detectChanges();
    expect(getInnerTextButton.disabled).toBeTrue();
  });  

  it('should dispatch loader in: onEnviar() function, and if the form is valid', ()=>{
    component.form.controls['email'].setValue(mockForm.email);
    component.form.controls['password'].setValue(mockForm.password);
    fixture.detectChanges();
    component.onEnviar();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(showLoader({message: 'Cargando...'}));
  })

  it('should dispatch showAlert action in: onEnviar(), if the form is invalid', ()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.form.controls['email'].setValue('emailFail')
    component.form.controls['password'].setValue('123');
    component.form.markAllAsTouched();
    component.onEnviar();

    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(showAlert({message:'Formulario invalido', alertType:'error'}));
  });

});
