import { TESTING_PROVIDERS } from './../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';


//NGRX
import { openModal } from './../../../shared/states/modalState/modal.actions';
import { Store } from '@ngrx/store';


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

    //Name and lastname not required
    const password = component.form.controls['password'];
    const email = component.form.controls['email'];
    const conditionsTerms = component.form.controls['conditionsTerms'];
  
    //MOCK DATA (INVALID)
    password.setValue('123');
    email.setValue('invalidEmail');
    conditionsTerms.setValue(false);
  
    //
    component.form.markAllAsTouched();
    fixture.detectChanges();
  
    expect(password.errors).not.toBeNull();//!toBeNull()  (Negado)
    expect(email.errors).not.toBeNull();
    expect(conditionsTerms.errors).not.toBeNull();
  });


});
