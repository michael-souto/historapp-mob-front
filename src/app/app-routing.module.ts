import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { LoginPage } from './auth/login/login.page';
import { AuthGuard } from './services/auth/auth.guard';
// import { RegisterPage } from './auth/register/register.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule),
  // },

  {
    path: '',
    loadChildren: () => import('./pages/features/features.module').then( m => m.FeaturesPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
