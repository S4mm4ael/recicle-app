import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full',
  },
  {
    path: 'loader',
    loadChildren: () =>
      import('./pages/loader/loader.module').then((m) => m.LoaderPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'pick-up-call',
    loadChildren: () =>
      import('./pages/pick-up-call/pick-up-call.module').then(
        (m) => m.PickUpCallPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'pick-up-calls',
    loadChildren: () =>
      import('./pages/pick-up-calls/pick-up-calls.module').then(
        (m) => m.PickUpCallsPageModule
      ),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
