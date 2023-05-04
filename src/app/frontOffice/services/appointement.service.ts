import { HttpClient ,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointement } from '../../models/appointement';
@Injectable({
  providedIn: 'root'
})
export class AppointementService {
  apiUrl : string = "http://localhost:8090/SpringMVC/Appointement"
  constructor( private http : HttpClient) { }
  public fetchAll(): Observable<Appointement[]> {
    return this.http.get<Appointement[]>(this.apiUrl);
  }

  public add(appointement: Appointement): Observable<Appointement> {

    return this.http.post<Appointement>(this.apiUrl + "/Add",appointement);
  }
  
  public getAllAppointement() : Observable<Appointement[]>
  {
    return this.http.get<Appointement[]>(this.apiUrl + "/all");
  }
  updateAppointement(id:any,appointement:Appointement){
    return this.http.put(this.apiUrl+"/update"+id,appointement);
  }

  deleteAppointement(id:any){
    return this.http.delete(this.apiUrl+"/delete/"+id);
  }
 /* getAppponitementId(id:any): Observable<Appointement> {
    return this.http.get<Appointement>(this.apiUrl+"/get/"+id);
  }*/
  public getAppponitementId(id: any): Observable<HttpResponse<any>> {
    return this.http.get(`${this.apiUrl}/get/${id}`,{observe : 'response'});
  }
}
