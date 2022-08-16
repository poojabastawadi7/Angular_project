import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  
  constructor(private http: HttpClient) {}
  
  getData() {
   let url ='https://dummyjson.com/products';
   //'https://mocki.io/v1/44e4c9c5-7d44-49a6-b6f1-57a2a6c518df';
   //'http:dummyjson.com/'
   return this.http.get(url);
  }
}
