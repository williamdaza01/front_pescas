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
  cuenca:string = "";
  metodo:number = 0;
  fecha:string = "";
  peso:string = "";
  sede:string = "";

  ngOnInit(): void {
    this.id = this.sim.id;
    this.cuenca = this.sim.cuenca;
    this.metodo = this.sim.metodo;
    this.fecha = this.sim.fecha;
    this.peso = this.sim.peso;
  }

  addRepuesto(){
    const val ={
      Cuenca: this.cuenca,
      Metodo: this.metodo,
      Fecha: this.fecha,
      Peso: this.peso,
    };
    this.service.postPescaList(val).subscribe( res => {
      alert(res.toString());
    });
  }

  updateRepuesto(){
    const val ={
      id: this.id,
      Cuenca: this.cuenca,
      Metodo: this.metodo,
      Fecha: this.fecha,
      Peso: this.peso,
    };
    this.service.putPescaList(val).subscribe( res => {
      alert(res.toString());
    });
  } 


}
