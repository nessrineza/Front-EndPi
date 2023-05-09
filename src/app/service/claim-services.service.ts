import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/Claim';

@Injectable({
  providedIn: 'root'
})



export class ClaimServicesService {
  private ListClaim='http://localhost:8090/SpringMVC/claim/all';
  private deleteClaim ='http://localhost:8090/SpringMVC/claim/delete';
private AddClaim ='http://localhost:8090/SpringMVC/claim/add';
private Pdf='http://localhost:8090/SpringMVC/claim/claims/pdf';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

  constructor(private http: HttpClient) { }

  GetAllClaims():Observable<any[]>{
    return this.http.get<any[]>(this.ListClaim,this.httpOptions);
  }

DeleteClaim(id:number):Observable<any>{
  return this.http.delete<any>(`${this.deleteClaim}/${id}`);
}



AddClaims(claim : Claim ):Observable<any[]>{
  let iduser = 1;
    return this.http.post<any[]>(`${this.AddClaim}/${iduser}`,claim);

}
updateClaim(claim: Claim): Observable<any[]> {
  let iduser = 1;
  return this.http.post<any[]>(`${this.updateClaim}/${iduser}`,claim);

}
pdf():Observable<Blob>{
  console.log('PDF function called');
  return this.http.get(this.Pdf,{
    responseType:'blob'
  });
}


}
