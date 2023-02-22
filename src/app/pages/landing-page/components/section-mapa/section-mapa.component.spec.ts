import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMapaComponent } from './section-mapa.component';

describe('SectionMapaComponent', () => {
  let component: SectionMapaComponent;
  let fixture: ComponentFixture<SectionMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
