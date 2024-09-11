import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {}
    getproducts() {
      return this.http.get("https://dummyjson.com/products")
   }
   getProductDetails(id : string) {
      return this.http.get(`https://dummyjson.com/products/${id}`)
    }
}
