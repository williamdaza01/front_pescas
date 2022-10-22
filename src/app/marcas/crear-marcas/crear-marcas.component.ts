import { Component, Input, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-crear-marcas',
  templateUrl: './crear-marcas.component.html',
  styleUrls: ['./crear-marcas.component.css']
})
export class CrearMarcasComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  @Input() sim:any;
  id:string = "";
  nombre:string = "";

  ngOnInit(): void {
    this.id = this.sim.id;
    this.nombre = this.sim.nombre;
  }

  addMarca(){
    const val ={
      Nombre: this.nombre,
    };
    this.service.postMarcasList(val).subscribe( res => {
      alert(res.toString());
    });
  }

  updateMarca(){
    const val ={
      id: this.id,
      Nombre: this.nombre,
    };
    this.service.putMarcasList(val).subscribe( res => {
      alert(res.toString());
    });
  }

}
