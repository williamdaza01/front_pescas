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
  id:number = 0;
  cuenca:number = 0;
  metodo:number = 0;
  fecha:string = "";
  peso:string = "";
  sede:string = "";
  idcuenca:string="0";
  idmetodo:string="0";

  ngOnInit(): void {
    this.id = this.sim.id;
    this.cuenca = this.sim.cuenca;
    this.metodo = this.sim.metodo;
    this.fecha = this.sim.fecha;
    this.peso = this.sim.peso;
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
    const val ={
      id: this.id,
      idCuenca: this.getIdCuenca(),
      idMetodo: this.getIdMetodo(),
      fecha: this.fecha,
      peso: this.peso,
    };
    this.service.postPescaList(val).subscribe( res => {
      alert(res.toString());
    });
  }
  
  updateRepuesto(){
    const val ={
      id: this.id,
      idCuenca: this.getIdCuenca(),
      idMetodo: this.getIdMetodo(),
      fecha: this.fecha,
      peso: this.peso,
    };
    this.service.putPescaList(val).subscribe( res => {
      alert(res.toString());
    });
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
