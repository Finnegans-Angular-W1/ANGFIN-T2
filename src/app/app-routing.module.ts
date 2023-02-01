import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [  
  {path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
