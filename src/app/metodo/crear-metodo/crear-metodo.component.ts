import { Component, Input, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-crear-sede',
  templateUrl: './crear-sede.component.html',
  styleUrls: ['./crear-sede.component.css']
})
export class CrearSedeComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  @Input() sim:any;
  id:string = "";
  nombre:string = "";
  telefono:number = 0;
  direccion:string = "";

  ngOnInit(): void {
    this.id = this.sim.id;
    this.nombre = this.sim.nombre;
    this.telefono = this.sim.telefono;
    this.direccion = this.sim.direccion;
  }

  addSede(){
    const val ={
      Nombre: this.nombre,
      Telefono: this.telefono,
      Direccion: this.direccion
    };
    this.service.postMetodoList(val).subscribe( res => {
      alert(res.toString());
    });
  }

  updateSede(){
    const val ={
      id: this.id,
      Nombre: this.nombre,
      Telefono: this.telefono,
      Direccion: this.direccion
    };
    this.service.putMetodoList(val).subscribe( res => {
      alert(res.toString());
    });
  } 

}
