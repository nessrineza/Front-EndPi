import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payement } from 'src/app/models/Payement';

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  apiUrl : string = "http://localhost:8090/SpringMVC/Payement"
  
  constructor( private http : HttpClient) { }
  public fetchAll(): Observable<Payement[]> {
    return this.http.get<Payement[]>(this.apiUrl);
  }

  /*public add(payement: Payement): Observable<Payement> {

    return this.http.post<Payement>(this.apiUrl + "/Add",Payement);
  }*/
 
  
  public getAllPayement() : Observable<Payement[]>
  {
    return this.http.get<Payement[]>(this.apiUrl + "/all");
  }
  updatePayement(id:any,payement:Payement){
    return this.http.put(this.apiUrl+"/update"+id,Payement);
  }

  deletePayement(id:any){
    return this.http.delete(this.apiUrl+"/delete/"+id);
  }
}
