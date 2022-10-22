import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  municipiosList:any = [];
  
  ngOnInit(): void {
    this.verMunicipios();
  }

  verMunicipios(){
    /* this.service.getMunicipiosList().subscribe( data => {
      this.municipiosList = data;
    }); */
  }
  
  getId(value:string){
    let id;
    id = value;
    return id;
  }
}
