import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }


  Signin(user:User):Observable<any>{

    return this.http.post<any>("http://localhost:8090/SpringMVC/auth/signin",user);
  }

  Signup(user:User):Observable<any>{
    console.log("user",user)
    return this.http.post<any>("http://localhost:8090/SpringMVC/auth/signup",user);
  }

  logout(){
    localStorage.clear()
  }

}
