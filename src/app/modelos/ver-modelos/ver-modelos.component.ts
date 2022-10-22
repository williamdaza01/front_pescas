import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-modelos',
  templateUrl: './ver-modelos.component.html',
  styleUrls: ['./ver-modelos.component.css']
})
export class VerModelosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  modelosList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;

  ngOnInit(): void {
    this.verModelos();
  }

  verModelos() {
    const getSede =  this.service.getModelosList().subscribe( data => {
      this.modelosList = data;
    })
  } 

  addModelos() {
    this.sim ={
      Nombre: 0,
    }
    this.Modaltitle="Agregar Modelos";
    this.ActivateAddEditSiembra=true;
  }

  closeClick(){
    this.ActivateAddEditSiembra=false;
  }

  editModelos(item:any){
    this.sim=item;
    this.Modaltitle = "Editar Modelos";
    this.ActivateAddEditSiembra = true;
  }

  deleteModelos(item:any){
    if(confirm("¿Seguro que desea eliminar el modelo?")) {
      this.service.deleteModelosList(item.id).subscribe( data => {
        alert(data.toString());
        this.verModelos();
      })
    }
  }


}
