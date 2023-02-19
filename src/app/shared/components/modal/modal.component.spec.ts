import { TESTING_PROVIDERS } from './../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { Store } from '@ngrx/store';
import { acceptModal, cancelModal, closeModal } from '../../states/modalState/modal.actions';
import { BodyRequest } from 'src/app/pages/auth-login/interfaces/body-request';
import * as exp from 'constants';
import { editProfileFail, editProfileStart } from 'src/app/pages/auth-login/state/auth.actions';
import { User } from 'src/app/core/interfaces/User';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [ TESTING_PROVIDERS ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /*  it('It should dispatch editProfileStart action in onSubmit()', () => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const mockNombres = {
      name :'Roberto',
      userName:'Walshs'
    }

    const mockUser = {
        id:1,
        first_name: 'Roberto',
        last_name: 'Walshsssss',
        email: 'juan.perez@example.com',
        points: 500,
        roleId: 1,
        createdAt: '0',//Creation date
        updatedAt: '1',
    
    }
    const updateUser: BodyRequest = mockNombres;
   
    const user: User = mockUser;


    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(editProfileStart({ updateUser, id: user.id}));
  }); */

  it('should return invalid', () => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;

    const mockNombres = {
      nombre:'Ya',
      nombreUsuario:'Joel'
    }
    
    const nombreForm = component.formEditUser.get('nombre');
    const nombreUsuarioForm = component.formEditUser.get('nombreUsuario');

    nombreUsuarioForm?.setValue(mockNombres.nombreUsuario);
    nombreForm?.setValue(mockNombres.nombre);

    fixture.detectChanges();
    expect(component.formEditUser.invalid).toEqual(true);
  });

  it('should dispatch openModal() in onAcceptModal', ()=>{
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.onAcceptModal();

    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(acceptModal());
  });

  it('should dispatch closeModal() in onAcceptModal()', ()=>{
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.onAcceptModal();

    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(closeModal());

  });
  
  it('should dispatch cancelModal() in onCloseModal()', ()=>{
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.onCloseModal();

    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(cancelModal());

  });

  it('should dispatch closeModal() in onCloseModal()', ()=>{
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.onCloseModal();

    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(cancelModal());

  });
 
  it('should disabled button if form is invalid', ()=>{
    const elementRef = fixture.debugElement.query(By.css('.modal-action button'));
    const getInnerTextButton = elementRef.nativeElement;

    //MOCK DATA (INVALID)
    component.formEditUser.controls['nombreUsuario'].setValue('abcd')
    component.formEditUser.controls['nombre'].setValue('ab');

    fixture.detectChanges();
    expect(getInnerTextButton.disabled).toBeTrue();
  }); 

});

