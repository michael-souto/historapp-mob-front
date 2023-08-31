import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/login/login.page';
import { AuthGuard } from './services/auth/auth.guard';
import { RegisterPage } from './auth/register/register.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events/list',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule),
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'configs',
    loadChildren: () => import('./pages/configs/configs.module').then( m => m.ConfigsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'locales',
    loadChildren: () => import('./pages/locales/locales.module').then( m => m.LocalesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'annotations',
    loadChildren: () => import('./pages/annotations/annotations.module').then( m => m.AnnotationsPageModule),
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
