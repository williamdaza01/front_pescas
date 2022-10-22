import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VerClientesComponent } from './clientes/ver-clientes/ver-clientes.component';
import { ModelosComponent } from './modelos/modelos.component';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SedesComponent } from './sedes/sedes.component';
import { VerEmpleadosComponent } from './empleados/ver-empleados/ver-empleados.component';
import { VerRepuestosComponent } from './repuestos/ver-repuestos/ver-repuestos.component';
import { VerModelosComponent } from './modelos/ver-modelos/ver-modelos.component';
import { VerSedesComponent } from './sedes/ver-sedes/ver-sedes.component';
import { ServicioDbpyService } from './servicio-dbpy.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarcasComponent } from './marcas/marcas.component';
import { VerMarcasComponent } from './marcas/ver-marcas/ver-marcas.component';
import { CrearSedeComponent } from './sedes/crear-sede/crear-sede.component';
import { CrearRepuestosComponent } from './repuestos/crear-repuestos/crear-repuestos.component';
import { CrearMarcasComponent } from './marcas/crear-marcas/crear-marcas.component';
import { CrearModelosComponent } from './modelos/crear-modelos/crear-modelos.component';
import { CrearClientesComponent } from './clientes/crear-clientes/crear-clientes.component';
import { CrearEmpleadosComponent } from './empleados/crear-empleados/crear-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    VerClientesComponent,
    ModelosComponent,
    RepuestosComponent,
    EmpleadosComponent,
    SedesComponent,
    VerEmpleadosComponent,
    VerRepuestosComponent,
    VerModelosComponent,
    VerSedesComponent,
    MarcasComponent,
    VerMarcasComponent,
    CrearSedeComponent,
    CrearRepuestosComponent,
    CrearMarcasComponent,
    CrearModelosComponent,
    CrearClientesComponent,
    CrearEmpleadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicioDbpyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
