import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';

const routes: Routes = [  
  {
    path: 'auth-login', 
    loadChildren: () => import('./pages/auth-login/auth-login.module').then( m => m.AuthLoginModule) 
  },
  {
    path: 'auth-registro',
    loadChildren: () => import ('./pages/auth-registro/auth-registro.module').then( m => m.AuthRegistroModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
