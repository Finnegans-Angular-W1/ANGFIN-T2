import { TESTING_PROVIDERS } from './../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { Store } from '@ngrx/store';

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

  it('It should return invalid', () => {

    const mockNombres = {
      nombre:'Ya',
      nombreUsuario:'Joel'
    }
    
    const nombreForm = component.formEditUser.get('nombre');
    const nombreUsuarioForm = component.formEditUser.get('nombreUsuario');

    nombreUsuarioForm?.setValue(mockNombres.nombreUsuario);
    nombreForm?.setValue(mockNombres.nombre);

    expect(component.formEditUser.invalid).toEqual(true);
  });

});

