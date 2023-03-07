import { TESTING_MODULES, TESTING_PROVIDERS } from './../../../../spec/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarMonedaComponent } from './cambiar-moneda.component';

describe('CambiarMonedaComponent', () => {
  let component: CambiarMonedaComponent;
  let fixture: ComponentFixture<CambiarMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarMonedaComponent ],
      imports: [ TESTING_MODULES ],
      providers: [ TESTING_PROVIDERS ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
