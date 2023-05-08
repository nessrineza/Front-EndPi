import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from '../model/publication';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  readonly API_URL = 'http://localhost:8089/SpringMVC/Comment';

  constructor(private httpClient: HttpClient) { }

  getOnePublication(idPublication:any):Observable<Publication> {
    return this.httpClient.get<Publication>(`http://localhost:8089/SpringMVC/publication/retrieve/${idPublication}`);
  }
    getAllComments(idPublication:any): Observable<Comment[]> {
      return this.httpClient.get<Comment[]>(`${this.API_URL}`+`/CommentsByPub/${idPublication}`);
    }
    addComment(comment : any,idPub:any) {
      return this.httpClient.post(`${this.API_URL}/add/${idPub}/3`, comment)/* add id1--id2 correctly */
    }
    editComment(comment : any){
      return this.httpClient.put(`${this.API_URL}/update`, comment)
    }
    deleteComment(idComment : any){
      return  this.httpClient.delete(`${this.API_URL}/delete/${idComment}`)
    }
    likeComment(idComment:any,comment:any){
      return this.httpClient.put(`${this.API_URL}/likes/${idComment}`,comment)
}
reportComment(idComment:any,comment:any){
  return this.httpClient.put(`${this.API_URL}/report/${idComment}`,comment)
}
hahaComment(idComment:any,comment:any){
  return this.httpClient.put(`${this.API_URL}/haha/${idComment}`,comment)
}
}
