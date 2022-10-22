import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuencaComponent } from './cuenca/cuenca.component';
import { PescaComponent } from './pesca/pesca.component';
import { MetodoComponent } from './metodo/metodo.component';
import { VerPescaComponent } from './pesca/ver-pesca/ver-pesca.component';
import { VerCuencaComponent } from './cuenca/ver-cuenca/ver-cuenca.component';
import { VerMetodoComponent } from './metodo/ver-metodo/ver-metodo.component';
import { ServicioDbpyService } from './servicio-dbpy.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearSedeComponent } from './metodo/crear-sede/crear-sede.component';
import { CrearPescaComponent } from './pesca/crear-pesca/crear-pesca.component';
import { CrearCuencaComponent } from './cuenca/crear-cuenca/crear-cuenca.component';

@NgModule({
  declarations: [
    AppComponent,
    CuencaComponent,
    PescaComponent,
    MetodoComponent,
    VerPescaComponent,
    VerCuencaComponent,
    VerMetodoComponent,
    CrearSedeComponent,
    CrearPescaComponent,
    CrearCuencaComponent,
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
