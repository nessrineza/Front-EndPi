import { UpdateMode } from './../../assets/back/vendor/chart.js/types/index.d';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announcement } from '../Models/announcement';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class AnnouncmentService {

  baseUrl = 'http://localhost:8090/SpringMVC/annonce';
    annonce: Announcement = new Announcement();

    public dataForm!: FormGroup;

    constructor(private httpClient: HttpClient) {}


    getAnnonceList(): Observable<Announcement[]> {
      return this.httpClient.get<Announcement[]>(this.baseUrl + '/allAnnouncement');
    }
    getAnnonceById(id: number): Observable<Announcement> {
      return this.httpClient.get<Announcement>(`${this.baseUrl}/getAnnouncement/` + id);
    }

    addAnnouncement(announcement:Announcement):Observable<HttpResponse<any>>{
      return this.httpClient.post(`${this.baseUrl}/addAnnonce`,announcement,{observe : 'response'});
    }
    addTask(formData: any): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/addAnnonce', formData);
    }

    UpdateAnnouncement(formData: any): Observable<any> {
      return this.httpClient.put(`${this.baseUrl}/updateAnnonce`,formData);
    }
   
    deleteProduct(id: any): Observable<HttpResponse<any>> {
      return this.httpClient.delete(`${this.baseUrl}/deleteAnnonce/${id}`,{observe : 'response'});
    }
    addAnn(formData: FormData): Observable<any> {
      return this.httpClient.post(`${this.baseUrl}/addAnnonce`, formData);
    }

    post_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
}
