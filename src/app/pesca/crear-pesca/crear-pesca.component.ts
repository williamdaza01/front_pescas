import { Component, Input, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-crear-pesca',
  templateUrl: './crear-pesca.component.html',
  styleUrls: ['./crear-pesca.component.css']
})
export class CrearPescaComponent implements OnInit {

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
    this.service.postPescaList(val).subscribe( res => {
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
    this.service.putPescaList(val).subscribe( res => {
      alert(res.toString());
    });
  } 


}
