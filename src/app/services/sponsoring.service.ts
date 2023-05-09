import { Sponsoring } from './../Models/sponsoring';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
const headerss = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class SponsoringService {

  baseUrl = 'http://localhost:8090/SpringMVC/sponsoring';
    sponsoring: Sponsoring = new Sponsoring();


    public dataForm!: FormGroup;

    constructor(private httpClient: HttpClient) {}


    getSponsoringList(): Observable<Sponsoring[]> {
      return this.httpClient.get<Sponsoring[]>(this.baseUrl + '/allSponsoring');
    }
    getSponsoringById(id: number): Observable<Sponsoring> {
      return this.httpClient.get<Sponsoring>(`${this.baseUrl}/getSponsoring/` + id);
    }


    addTask(formData: any): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/addSponsoring', formData);
    }

    updateSponsoring(formData: any): Observable<any> {
      return this.httpClient.put(this.baseUrl + '/updateSponsoring', formData);
    }
    deleteSponsoring(sponsoring: Sponsoring): Observable<Sponsoring> {
      const url = `${this.baseUrl}/deleteSponsoring/${sponsoring.id}`;
      return this.httpClient.delete<Sponsoring>(url);
    }

    post_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };



}
