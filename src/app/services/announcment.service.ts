import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announcement } from '../Models/announcement';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncmentService {

  baseUrl = 'http://localhost:8090/SpringMVC/annonce';
    annonce: Announcement = new Announcement();

    public dataForm!: FormGroup;

    constructor(private httpClient: HttpClient) {}
    storageUserAsStr: any = localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser') || '{}')
      : null;

    getProductList(): Observable<Announcement[]> {
      return this.httpClient.get<Announcement[]>(this.baseUrl + '/allAnnouncement');
    }
    getProductById(id: number): Observable<Announcement> {
      return this.httpClient.get<Announcement>(`${this.baseUrl}/getAnnouncement/` + id);
    }

    addAnnouncement(announcement:Announcement){
      return this.httpClient.post(this.baseUrl+  '/addAnnonce' ,announcement);
    }

    updateTask(formData: FormData): Observable<any> {
      return this.httpClient.put(this.baseUrl + '/updateAnnonce', formData);
    }
    deleteProduct(annonce: Announcement): Observable<Announcement> {
      const url = `${this.baseUrl}/deleteAnnonce/${annonce.id}`;
      return this.httpClient.delete<Announcement>(url);
    }

    post_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };



}
