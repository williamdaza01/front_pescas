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
    this.service.postCuencaList(val).subscribe( res => {
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
    this.service.putCuencaList(val).subscribe( res => {
      alert(res.toString());
    });
  }


}
