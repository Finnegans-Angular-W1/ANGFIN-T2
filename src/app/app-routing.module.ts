import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./core/guards/auth.guard";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then( m => m.LandingPageModule)
  },
  {
    path: "inicio",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
      canLoad: [AuthGuard],
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/auth-login/auth-login.module').then( m => m.AuthLoginModule) 
  },
  {
    path: "registrarse",
    loadChildren: () =>
      import("./pages/auth-registro/auth-registro.module").then(
        (m) => m.AuthRegistroModule
      ),
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    anchorScrolling: "enabled",
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
