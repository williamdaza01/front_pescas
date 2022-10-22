import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  contratistasList:any = [];

  ngOnInit(): void {
    this.verContratistas();
  }

  verContratistas(){
    this.service.getContratistasList().subscribe( data => {
      this.contratistasList = data;
    })
  }

  getId(value:string){
    let id;
    id = value;
    return id;
  }

}
