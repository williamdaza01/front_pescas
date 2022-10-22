import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepuestosComponent } from './repuestos/repuestos.component'
import { ClientesComponent } from './clientes/clientes.component'
import { ModelosComponent } from './modelos/modelos.component'
import { EmpleadosComponent } from './empleados/empleados.component'
import { SedesComponent } from './sedes/sedes.component'
import { MarcasComponent } from './marcas/marcas.component';

const routes: Routes = [
  {path: 'repuestos', component:RepuestosComponent},
  {path: 'sedes', component:SedesComponent},
  {path: 'empleados', component:EmpleadosComponent},
  {path: 'modelos', component:ModelosComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'marcas', component:MarcasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
