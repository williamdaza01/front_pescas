import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDbpyService {
  readonly APIurl = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  getPescaList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + 'pesca/');
  }

  postPescaList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + 'pesca/',val);
  }

  putPescaList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `pesca/${val.ID_PESCA}` , val);
  }
  deletePescaList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + 'pesca/' + val);
  }

  getCuencaList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + 'cuenca/');
  }

  postCuencaList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + 'cuenca/',val);
  }

  putCuencaList(val:any):Observable<any[]> {
    return this.http.put<any[]>(this.APIurl + `cuenca/${val.ID_CUENCA}` , val);
  }

  deleteCuencaList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + 'cuenca/' + val);
  }

  getMetodoList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + 'metodo');
  }

  postMetodoList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + 'metodo/',val);
  }

  putMetodoList(val:any):Observable<any[]> {
    return this.http.put<any[]>(this.APIurl + `metodo/${val.ID_METODO}` , val);
  }

  deleteMetodoList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + 'metodo/' + val);
  }

}
