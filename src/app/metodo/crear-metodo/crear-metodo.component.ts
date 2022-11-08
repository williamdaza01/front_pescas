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
  ID_METODO:number = 0;
  NOMBRE_METODO:string = "";

  ngOnInit(): void {
    this.ID_METODO = this.sim.ID_METODO;
    this.NOMBRE_METODO = this.sim.NOMBRE_METODO;
  }

  addSede(){
    const id = Date.now();
    this.ID_METODO = Math.round(id/1000);    
    const val ={
      ID_METODO:this.ID_METODO,
      NOMBRE_METODO: this.NOMBRE_METODO,
    };
    this.service.postMetodoList(val).subscribe( res => {
      alert(res.toString());
    });
    window.location.reload();
  }

  updateSede(){
    const val ={
      ID_METODO: this.ID_METODO,
      NOMBRE_METODO: this.NOMBRE_METODO,
    };
    this.service.putMetodoList(val).subscribe( res => {
      alert(res.toString());
    });
   window.location.reload();
  } 

}
