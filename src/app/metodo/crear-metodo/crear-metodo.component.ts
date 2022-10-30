import { Component, Input, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-crear-metodo',
  templateUrl: './crear-metodo.component.html',
  styleUrls: ['./crear-metodo.component.css']
})
export class CrearMetodoComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  @Input() sim:any;
  id:number = 0;
  nombre:string = "";
  telefono:number = 0;
  direccion:string = "";

  ngOnInit(): void {
    this.id = this.sim.id;
    this.nombre = this.sim.nombre;
  }

  addSede(){
    const val ={
      id:this.id,
      nombre: this.nombre,
    };
    this.service.postMetodoList(val).subscribe( res => {
      alert(res.toString());
    });
  }

  updateSede(){
    const val ={
      id: this.id,
      nombre: this.nombre,
    };
    this.service.putMetodoList(val).subscribe( res => {
      alert(res.toString());
    });
  } 

}
