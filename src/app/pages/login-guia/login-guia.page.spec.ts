import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginGuiaPage } from './login-guia.page';

describe('LoginGuiaPage', () => {
  let component: LoginGuiaPage;
  let fixture: ComponentFixture<LoginGuiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginGuiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
