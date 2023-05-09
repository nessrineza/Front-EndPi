import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointement } from 'src/app/models/appointement';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  apiUrl : string = "http://localhost:8090/SpringMVC/Appointement"
  constructor( private http : HttpClient) { }
  public fetchAll(): Observable<Appointement[]> {
    return this.http.get<Appointement[]>(this.apiUrl+ "/all");
  }

  public add(appointement: Appointement): Observable<Appointement> {

    return this.http.post<Appointement>(this.apiUrl + "/Add",appointement);
  }
  
  public getAllAppointement() : Observable<Appointement[]>
  {
    return this.http.get<Appointement[]>(this.apiUrl + "/all");
  }
}
