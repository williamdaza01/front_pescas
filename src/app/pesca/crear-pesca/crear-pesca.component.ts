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
  cuencaList: any=[];
  metodoList: any=[];
  ID_PESCA:number = 0;
  ID_CUENCA:number = 0;
  ID_METODO:number = 0;
  FECHA_PESCA:string = "";
  PESO_PESCADO:string = "";
  sede:string = "";
  idcuenca:string="0";
  idmetodo:string="0";

  ngOnInit(): void {
    this.ID_PESCA = this.sim.ID_PESCA;
    this.ID_CUENCA = this.sim.ID_CUENCA;
    this.ID_METODO = this.sim.ID_METODO;
    this.FECHA_PESCA = this.sim.FECHA_PESCA;
    this.PESO_PESCADO = this.sim.PESO_PESCADO;
    this.verCuencas();
    this.verMetodos();
  }

  getIdCuenca(){
    const idCuenca = Number(this.idcuenca[0]);
    return idCuenca;
  }

  getIdMetodo(){
    const idMetodo = Number(this.idmetodo[0]);
    return idMetodo;
  }    
  
  addCuenca(){
    const id = Date.now();
    this.ID_PESCA = Math.round(id/1000);
    const val ={
      ID_PESCA: this.ID_PESCA,
      ID_CUENCA: this.getIdCuenca(),
      ID_METODO: this.getIdMetodo(),
      FECHA_PESCA: this.FECHA_PESCA,
      PESO_PESCADO: this.PESO_PESCADO,
    };
    this.service.postPescaList(val).subscribe( res => {
      alert(res.toString());
    });
    window.location.reload();
  }
  
  updateRepuesto(){
    const val ={
      ID_PESCA: this.ID_PESCA,
      ID_CUENCA: this.getIdCuenca(),
      ID_METODO: this.getIdMetodo(),
      FECHA_PESCA: this.FECHA_PESCA,
      PESO_PESCADO: this.PESO_PESCADO,
    };
    this.service.putPescaList(val).subscribe( res => {
      alert(res.toString());
    });
    window.location.reload();
  } 

  verCuencas(){
    this.service.getCuencaList().subscribe( data => {
      this.cuencaList = data;
    });
  }

  verMetodos(){
    this.service.getMetodoList().subscribe( data => {
      this.metodoList = data;
    });
  }
  
}
