import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-sedes',
  templateUrl: './ver-sedes.component.html',
  styleUrls: ['./ver-sedes.component.css']
})
export class VerSedesComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  sedesList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;
  isShow:boolean = false;

  ngOnInit(): void {
    this.verSedes();
  }

  verSedes() {
    const getSede =  this.service.getSedesList().subscribe( data => {
      this.sedesList = data;
    })
  } 

  addSede() {
    this.sim ={
      Nombre: 0,
      Direccion: 0,
      Telefono: 0
    }
    this.Modaltitle="Agregar Sede";
    this.ActivateAddEditSiembra=true;
  }

  closeClick(){
    this.ActivateAddEditSiembra=false;
    this.verSedes();
  }

  editSede(item:any){
    this.sim=item;
    this.Modaltitle = "Editar Sede";
    this.ActivateAddEditSiembra = true;
  }

  deleteSede(item:any){
    if(confirm("¿Seguro que desea eliminar la sede?")) {
      this.service.deleteSedesList(item.id).subscribe( data => {
        alert(data.toString());
        this.verSedes();
      })
    }
  }

}
