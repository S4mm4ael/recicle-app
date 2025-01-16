import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/AppStoreModule';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoadingComponent } from './components/loading/loading.component';

import { environment } from '../environments/environment';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ...AppStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
