import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';

import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [  
  {
    path: "home",
    loadChildren: () => 
    import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth-login', 
    loadChildren: () => import('./pages/auth-login/auth-login.module').then( m => m.AuthLoginModule) 
  },
  {
    path: 'auth-registro',
    loadChildren: () => import ('./pages/auth-registro/auth-registro.module').then( m => m.AuthRegistroModule)
  },

  {path: "**", component:PageNotFoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
