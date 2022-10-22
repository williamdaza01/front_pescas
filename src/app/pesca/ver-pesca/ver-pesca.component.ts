import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-pesca',
  templateUrl: './ver-pesca.component.html',
  styleUrls: ['./ver-pesca.component.css']
})
export class VerPescaComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  pescaList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;

  ngOnInit(): void {
    this.verPesca();
  }

  verPesca() {
    const getSede =  this.service.getPescaList().subscribe( data => {
      this.pescaList = data;
    })
  } 

  addRepuesto() {
    this.sim ={
      Nombre: 0,
      Precio: 0,
      Modelo: 0,
      Descripcion: 0,
      Sede: 0
    }
    this.Modaltitle="Agregar Repuesto";
    this.ActivateAddEditSiembra=true;
  }

  closeClick(){
    this.ActivateAddEditSiembra=false;
  }

  editRepuesto(item:any){
    this.sim=item;
    this.Modaltitle = "Editar Repuesto";
    this.ActivateAddEditSiembra = true;
  }

  deleteRepuesto(item:any){
    if(confirm("¿Seguro que desea eliminar el repuesto?")) {
      this.service.deletePescaList(item.id).subscribe( data => {
        alert(data.toString());
        this.verPesca();
      })
    }
  }
}
