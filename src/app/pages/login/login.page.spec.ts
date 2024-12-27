import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/app/store/loading/loading.reducers';
import { loginReducer } from 'src/app/store/login/login.reducers';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { recoverPassword } from 'src/app/store/login/login.actions';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(),
        StoreModule.forFeature('loading', loadingReducer),
        StoreModule.forFeature('login', loginReducer),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recover email and password', () => {
    const store = TestBed.inject(Store);
    spyOn(store, 'dispatch');
    component.forgotEmailPassword();
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('Should show loading', () => {
    const store = TestBed.inject(Store);
    fixture.detectChanges();
    store.dispatch(recoverPassword());
    store.select('loading').subscribe((loading) => {
      expect(loading.show).toBeTrue();
    });
  });

  //TODO fix router call
  it('should navigate to home page', () => {
    spyOn(router, 'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should navigate to register page', () => {
    spyOn(router, 'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });
});
