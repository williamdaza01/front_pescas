import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepuestosComponent } from './repuestos/repuestos.component'
import { ModelosComponent } from './modelos/modelos.component'
import { SedesComponent } from './sedes/sedes.component'

const routes: Routes = [
  {path: 'repuestos', component:RepuestosComponent},
  {path: 'sedes', component:SedesComponent},
  {path: 'modelos', component:ModelosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
