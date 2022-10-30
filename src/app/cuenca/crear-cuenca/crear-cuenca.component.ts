import { Component, Input, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-crear-cuenca',
  templateUrl: './crear-cuenca.component.html',
  styleUrls: ['./crear-cuenca.component.css']
})
export class CrearCuencaComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  @Input() sim:any;
  id:number = 0;
  nombre:string = "";

  ngOnInit(): void {
    this.id = this.sim.id;
    this.nombre = this.sim.nombre;
  }

  addModelo(){
    const val ={
      id: this.id,
      nombre: this.nombre,
    };
    this.service.postCuencaList(val).subscribe( res => {
      alert(res.toString());
    });
  }

  updateModelo(){
    const val ={
      id: this.id,
      Nombre: this.nombre,
    };
    this.service.putCuencaList(val).subscribe( res => {
      alert(res.toString());
    });
  }


}
