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
    const getPesca =  this.service.getPescaList().subscribe( data => {
      this.pescaList = data;
    })
  } 

  addRepuesto() {
    this.sim ={
      Cuenca: 0,
      Metodo: 0,
      Fecha: 0,
      Peso: 0,
    }
    this.Modaltitle="Agregar Pesca";
    this.ActivateAddEditSiembra=true;
  }

  closeClick(){
    this.ActivateAddEditSiembra=false;
  }

  editRepuesto(item:any){
    this.sim=item;
    this.Modaltitle = "Editar Pesca";
    this.ActivateAddEditSiembra = true;
  }

  deleteRepuesto(item:any){
    if(confirm("¿Seguro que desea eliminar la pesca?")) {
      this.service.deletePescaList(item.id).subscribe( data => {
        alert(data.toString());
        this.verPesca();
      })
    }
  }
}
