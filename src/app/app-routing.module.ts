import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PescaComponent } from './pesca/pesca.component'
import { CuencaComponent } from './cuenca/cuenca.component'
import { MetodoComponent } from './metodo/metodo.component'

const routes: Routes = [
  {path: 'pesca', component:PescaComponent},
  {path: 'metodo', component:MetodoComponent},
  {path: 'cuenca', component:CuencaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
