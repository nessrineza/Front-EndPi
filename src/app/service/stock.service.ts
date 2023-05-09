import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/Stock';

@Injectable({
  providedIn: 'root'
})

export class stockService{
  private ListStock='http://localhost:8090/SpringMVC/stock/retrieve-all-stocks';
  private deleteStock ='http://localhost:8090/SpringMVC/stock/remove-stock';
private AddStocks ='http://localhost:8090/SpringMVC/stock/addd';
private getbyid ='http://localhost:8090/SpringMVC/stock/retrieveStock';

httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

  constructor(private http: HttpClient) { }

  GetAllStock():Observable<any[]>{
    return this.http.get<any[]>(this.ListStock,this.httpOptions);
  }

DeleteStock(id:number):Observable<any>{
  return this.http.delete<any>(`${this.deleteStock}/${id}`);
}



AddStock(stock : Stock ):Observable<any[]>{
    return this.http.post<any[]>(`${this.AddStocks}`,stock);

}
/*updatestock(stock: Stock): Observable<any[]> {
  let iduser = 1;
  return this.http.put<any[]>(`${this.updatestock}/${iduser}`,stock);

}*/
updateStock(id:any,stock:Stock){
  return this.http.put(`${this.updateStock}/`+id,stock);
}
public getStockId(id: any): Observable<HttpResponse<any>> {
  return this.http.get(`${this.getbyid}/${id}`,{observe : 'response'});
}









}

