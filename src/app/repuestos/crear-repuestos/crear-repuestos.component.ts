import { Component, Input, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-crear-repuestos',
  templateUrl: './crear-repuestos.component.html',
  styleUrls: ['./crear-repuestos.component.css']
})
export class CrearRepuestosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  @Input() sim:any;
  id:string = "";
  nombre:string = "";
  precio:number = 0;
  modelo:string = "";
  descripcion:string = "";
  sede:string = "";

  ngOnInit(): void {
    this.id = this.sim.id;
    this.nombre = this.sim.nombre;
    this.precio = this.sim.precio;
    this.modelo = this.sim.modelo;
    this.descripcion = this.sim.descripcion;
    this.sede = this.sim.sede;
  }

  addRepuesto(){
    const val ={
      Nombre: this.nombre,
      Precio: this.precio,
      Modelo: this.modelo,
      Descripcion: this.descripcion,
      Sede: this.sede
    };
    this.service.postRepuestosList(val).subscribe( res => {
      alert(res.toString());
    });
  }

  updateRepuesto(){
    const val ={
      id: this.id,
      Nombre: this.nombre,
      Telefono: this.precio,
      Direccion: this.modelo,
      Descripcion: this.descripcion,
      Sede: this.sede
    };
    this.service.putRepuestosList(val).subscribe( res => {
      alert(res.toString());
    });
  } 


}
