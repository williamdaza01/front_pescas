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
  ID_CUENCA:number = 0;
  NOMBRE_CUENCA:string = "";

  ngOnInit(): void {
    this.ID_CUENCA = this.sim.ID_CUENCA;
    this.NOMBRE_CUENCA = this.sim.NOMBRE_CUENCA;
  }

  addModelo(){
    const id = Date.now();
    this.ID_CUENCA = Math.round(id/1000);
    const val ={
      ID_CUENCA: this.ID_CUENCA,
      NOMBRE_CUENCA: this.NOMBRE_CUENCA,
    };
    this.service.postCuencaList(val).subscribe( res => {
      alert(res.toString());
    });
    window.location.reload();
  }

  updateModelo(){
    const val ={
      ID_CUENCA: this.ID_CUENCA,
      NOMBRE_CUENCA: this.NOMBRE_CUENCA,
    };
    this.service.putCuencaList(val).subscribe( res => {
      alert(res.toString());
    });
    window.location.reload();
  }


}
