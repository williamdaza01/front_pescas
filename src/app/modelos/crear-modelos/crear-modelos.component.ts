import { Component, Input, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-crear-modelos',
  templateUrl: './crear-modelos.component.html',
  styleUrls: ['./crear-modelos.component.css']
})
export class CrearModelosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  @Input() sim:any;
  id:string = "";
  nombre:string = "";
  marca:string = "";
  ano:number = 0;

  ngOnInit(): void {
    this.id = this.sim.id;
    this.nombre = this.sim.nombre;
    this.marca = this.sim.marca;
    this.ano = this.sim.ano;
  }

  addModelo(){
    const val ={
      Nombre: this.nombre,
      Marca: this.marca,
      ano: this.ano
    };
    this.service.postModelosList(val).subscribe( res => {
      alert(res.toString());
    });
  }

  updateModelo(){
    const val ={
      id: this.id,
      Nombre: this.nombre,
      Marca: this.marca,
      ano: this.ano
    };
    this.service.putModelosList(val).subscribe( res => {
      alert(res.toString());
    });
  }


}
