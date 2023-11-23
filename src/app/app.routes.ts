import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'acceso-socio',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'login-guia',
    loadComponent: () => import('./pages/login-guia/login-guia.page').then( m => m.LoginGuiaPage)
  },
  {
    path: 'acceso-socio',
    loadComponent: () => import('./pages/acceso-socio/acceso-socio.page').then( m => m.AccesoSocioPage)
  },
  {
    path: 'home-apisearch',
    loadComponent: () => import('./pages/home-apisearch/home-apisearch.page').then( m => m.HomeApisearchPage)
  },

];
