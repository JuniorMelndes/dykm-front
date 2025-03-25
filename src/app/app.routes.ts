import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';

export const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
