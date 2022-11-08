import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-metodo',
  templateUrl: './ver-metodo.component.html',
  styleUrls: ['./ver-metodo.component.css']
})
export class VerMetodoComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  metodoList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;
  isShow:boolean = false;

  ngOnInit(): void {
    this.verMetodo();
  }

  verMetodo() {
    const getMetodo=  this.service.getMetodoList().subscribe( data => {
      console.log("data");
      
      this.metodoList = data;
    })
  } 

  addSede() {
    this.sim ={
      ID_METODO:0,
      NOMBRE_METODO: ""
    }
    this.Modaltitle="Agregar Sede";
    this.ActivateAddEditSiembra=true;
  }

  closeClick(){
    this.ActivateAddEditSiembra=false;
    this.verMetodo();
  }

  editSede(item:any){
    this.sim=item;
    this.Modaltitle = "Editar Sede";
    this.ActivateAddEditSiembra = true;
  }

  deleteSede(item:any){
    if(confirm("¿Seguro que desea eliminar el metodo?")) {
      this.service.deleteMetodoList(item.ID_METODO).subscribe( data => {
        alert(data.toString());
        this.verMetodo();
      });
    }
    window.location.reload();
  }

}
