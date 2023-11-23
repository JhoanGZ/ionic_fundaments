import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccesoSocioPage } from './acceso-socio.page';

describe('AccesoSocioPage', () => {
  let component: AccesoSocioPage;
  let fixture: ComponentFixture<AccesoSocioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccesoSocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
