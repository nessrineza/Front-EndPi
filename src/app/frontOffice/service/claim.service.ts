import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from 'src/app/models/Claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  url: String = "http://localhost:8090/SpringMVC/claim";
  constructor(private http:HttpClient) { }

  //crud

  public addClaim(claim:Claim){
    return this.http.post<Claim>(this.url+"/addClaim/",Claim);
  }
  public editClaim(claim:Claim){
    return this.http.put(this.url+"/editClaim/",claim);
  }
  public getClaims(){
    return this.http.get(this.url+"/getClaim");
  }
  public deleteClaim(id:number){
    return this.http.delete(this.url+"/deleteClaim/"+id);
  }
  public getClaimById(id:number){
    return this.http.get(this.url+"/getById/"+id);
  }


}
