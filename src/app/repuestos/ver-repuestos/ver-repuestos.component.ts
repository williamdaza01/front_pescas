import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-repuestos',
  templateUrl: './ver-repuestos.component.html',
  styleUrls: ['./ver-repuestos.component.css']
})
export class VerRepuestosComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  repuestosList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;

  ngOnInit(): void {
    this.verRepuestos();
  }

  verRepuestos() {
    const getSede =  this.service.getRepuestosList().subscribe( data => {
      this.repuestosList = data;
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
      this.service.deleteRepuestosList(item.id).subscribe( data => {
        alert(data.toString());
        this.verRepuestos();
      })
    }
  }
}
