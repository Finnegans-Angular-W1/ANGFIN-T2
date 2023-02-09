import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciaInversionComponent } from './ganancia-inversion.component';

describe('GananciaInversionComponent', () => {
  let component: GananciaInversionComponent;
  let fixture: ComponentFixture<GananciaInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GananciaInversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GananciaInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
