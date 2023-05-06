import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Publication } from "../model/publication";

@Injectable({
  providedIn: 'root'
})

export class PublicationService {


    readonly API_URL = 'http://localhost:8089/SpringMVC/publication';

    constructor(private httpClient: HttpClient) { }

    getAllPublications(): Observable<Publication[]> {
      return this.httpClient.get<Publication[]>(`${this.API_URL}`+`/publications`);
    }
    getOnePublication(idPublication:any) {
      return this.httpClient.get(`${this.API_URL}`+`/retrieve/${idPublication}`);
    }
    addPublication(publication : any) {
      return this.httpClient.post(`${this.API_URL}/add/2`, publication) /* add with user id */
    }
    editPublication(publication : any){
      return this.httpClient.put(`${this.API_URL}/update`, publication)
    }
    deletePublication(idPublication : any){
      return  this.httpClient.delete(`${this.API_URL}/delete/${idPublication}`)
    }

  }

