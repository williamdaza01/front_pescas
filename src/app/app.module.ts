import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelosComponent } from './modelos/modelos.component';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { SedesComponent } from './sedes/sedes.component';
import { VerRepuestosComponent } from './repuestos/ver-repuestos/ver-repuestos.component';
import { VerModelosComponent } from './modelos/ver-modelos/ver-modelos.component';
import { VerSedesComponent } from './sedes/ver-sedes/ver-sedes.component';
import { ServicioDbpyService } from './servicio-dbpy.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearSedeComponent } from './sedes/crear-sede/crear-sede.component';
import { CrearRepuestosComponent } from './repuestos/crear-repuestos/crear-repuestos.component';
import { CrearModelosComponent } from './modelos/crear-modelos/crear-modelos.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelosComponent,
    RepuestosComponent,
    SedesComponent,
    VerRepuestosComponent,
    VerModelosComponent,
    VerSedesComponent,
    CrearSedeComponent,
    CrearRepuestosComponent,
    CrearModelosComponent,
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
