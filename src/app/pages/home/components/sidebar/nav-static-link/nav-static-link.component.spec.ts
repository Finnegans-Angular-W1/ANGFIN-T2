import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStaticLinkComponent } from './nav-static-link.component';

describe('NavStaticLinkComponent', () => {
  let component: NavStaticLinkComponent;
  let fixture: ComponentFixture<NavStaticLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavStaticLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavStaticLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
