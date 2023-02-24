import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazofijoChartComponent } from './plazofijo-chart.component';

describe('PlazofijoChartComponent', () => {
  let component: PlazofijoChartComponent;
  let fixture: ComponentFixture<PlazofijoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlazofijoChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlazofijoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
