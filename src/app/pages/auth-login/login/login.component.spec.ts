import { TESTING_MODULES, TESTING_PROVIDERS } from './../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

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

  it('invalid form login',()=>{
    const mockForm={
      email: '1x1x11x1x1x11',
      password: '222'
    }
    const emailForm = component.form.get('email');
    const passwordForm = component.form.get('password');

    emailForm?.setValue(mockForm.email);
    passwordForm?.setValue(mockForm.password);
    
    expect(component.form.invalid).toBeTrue();
  });

  it('valid form login',()=>{
    const mockForm={
      email: 'usuario@test.com',
      password: 'abc123'
    }
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
  
  

});
