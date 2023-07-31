import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datamodel } from './model';


@Injectable({
  providedIn: 'root'
})
export class LoadService {
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  url='http://localhost:3005/customer'
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get<datamodel>(this.url);
  }
  addcustomer(data:datamodel){
    return this.http.post<datamodel>(this.url, data)
  }
  deletecustomer(id:number){
    return this.http.delete<datamodel>("http://localhost:3005/customer/"+id)
  }
  fetchcustomer(id:number){
    return this.http.get<datamodel>("http://localhost:3005/customer/"+id)
  }
  editcustomer(data:datamodel,id:number){
    return this.http.put<datamodel>("http://localhost:3005/customer/"+id,data);
  }
}
