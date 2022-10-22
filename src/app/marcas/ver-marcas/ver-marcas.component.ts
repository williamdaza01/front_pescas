import { Component, OnInit } from '@angular/core';
import { ServicioDbpyService } from 'src/app/servicio-dbpy.service';

@Component({
  selector: 'app-ver-marcas',
  templateUrl: './ver-marcas.component.html',
  styleUrls: ['./ver-marcas.component.css']
})
export class VerMarcasComponent implements OnInit {

  constructor(private service:ServicioDbpyService) { }

  marcasList:any = [];
  Modaltitle:string = "";
  ActivateAddEditSiembra:boolean = false;
  sim:any;

  ngOnInit(): void {
    this.verMarcas();
  }

  verMarcas() {
    const getSede =  this.service.getMarcasList().subscribe( data => {
      this.marcasList = data;
    })
  } 

  addMarca() {
    this.sim ={
      Nombre: 0,
    }
    this.Modaltitle="Agregar Marca";
    this.ActivateAddEditSiembra=true;
  }

  closeClick(){
    this.ActivateAddEditSiembra=false;
  }

  editMarca(item:any){
    this.sim=item;
    this.Modaltitle = "Editar Marca";
    this.ActivateAddEditSiembra = true;
  }

  deleteMarca(item:any){
    if(confirm("¿Seguro que desea eliminar el marca?")) {
      this.service.deleteMarcasList(item.id).subscribe( data => {
        alert(data.toString());
        this.verMarcas();
      })
    }
  }

}
