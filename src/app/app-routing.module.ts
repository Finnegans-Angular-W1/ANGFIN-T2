import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';

const routes: Routes = [  
  {
    path: 'auth', //Cuando alguien entra al auth, se empieza a cargar este módulo.
    loadChildren: () => import('./pages/auth-login/auth-login.module').then( module => module.AuthLoginModule) 
    /* el import es una función que retorna una promesa. Cuando se ejecuta, es decir, cuando se carga el módulo
    se activa "then" */
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
