import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO fix router call
  // it('should navigate to home page', () => {
  //   spyOn(router, 'navigate');
  //   component.login();
  //   expect(router.navigate).toHaveBeenCalledWith(['home']);
  // });

  // it('should navigate to register page', () => {
  //   spyOn(router, 'navigate');
  //   component.register();
  //   expect(router.navigate).toHaveBeenCalledWith(['register']);
  // });
});
