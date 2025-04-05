import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./Components/logi/logi.component').then(m => m.LogiComponent) },
  { path: 'admin', loadComponent: () => import('./Components/admin/admin.component').then(m => m.AdminComponent) },
];
