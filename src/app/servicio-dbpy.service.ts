import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDbpyService {
  readonly APIurl = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  getPescaList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/pesca');
  }

  postPescaList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/pesca/',val);
  }

  putPescaList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/pesca/${val.id}` , val);
  }
  deletePescaList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/pesca/' + val);
  }

  getCuencaList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/cuenca');
  }

  postCuencaList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/cuenca/',val);
  }

  putCuencaList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/cuenca/${val.id}` , val);
  }

  deleteCuencaList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/cuenca/' + val);
  }

  getContratistasList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/contratistas');
  }

  getMetodoList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/metodo');
  }

  postMetodoList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + '/metodo/',val);
  }

  putMetodoList(val:any):Observable<any[]> {
    console.log(val.id);
    return this.http.put<any[]>(this.APIurl + `/metodo/${val.id}` , val);
  }

  deleteMetodoList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/metodo/' + val);
  }
}
