import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-cuenca',
  templateUrl: './ver-cuenca.component.html',
  styleUrls: ['./ver-cuenca.component.css']
})
export class VerCuencaComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  cuencaList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;

  ngOnInit(): void {
    this.verCuenca();
  }

  verCuenca() {
    const getSede =  this.service.getCuencaList().subscribe( data => {
      this.cuencaList = data;
    })
  } 

  addCuenca() {
    this.sim ={
      Nombre: 0,
    }
    this.Modaltitle="Agregar Cuenca";
    this.ActivateAddEditSiembra=true;
  }

  closeClick(){
    this.ActivateAddEditSiembra=false;
  }

  editCuenca(item:any){
    this.sim=item;
    this.Modaltitle = "Editar Cuenca";
    this.ActivateAddEditSiembra = true;
  }

  deleteCuenca(item:any){
    if(confirm("¿Seguro que desea eliminar el modelo?")) {
      this.service.deleteCuencaList(item.id).subscribe( data => {
        alert(data.toString());
        this.verCuenca();
      })
    }
  }


}
