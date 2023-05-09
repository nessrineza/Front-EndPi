import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  // Admin ////
  getAllUsers():Observable<any>{
    return this.http.get<any>("http://localhost:8090/SpringMVC/admin/user/getAll");
  }

  getUserById(idUser:any):Observable<any>{
    return this.http.get<any>("http://localhost:8090/SpringMVC/admin/user/getuser/"+idUser);
  }

  deleteUser(idUser:number):Observable<any>{
    return this.http.delete<any>("http://localhost:8090/SpringMVC/admin/user/delete/"+idUser);
  }

  blockUser(idUser:number):Observable<any>{
    return this.http.post<any>("http://localhost:8090/SpringMVC/admin/user/banclient/"+idUser,null);
  }

  unblockUser(idUser:number):Observable<any>{
    return this.http.post<any>("http://localhost:8090/SpringMVC/admin/user/unbanclient/"+idUser,null);
  }


  updateUser(user:User):Observable<any>{
    return this.http.put<any>("http://localhost:8090/SpringMVC/client/user/updateUser",user);
  }



  // User /////

}
