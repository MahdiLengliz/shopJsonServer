import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
const url = 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }


  createProduct(product): Observable<Product> {
   return this.http.post<Product>(url,product);
  }
  viewProduct(productID): Observable<Product> {
    return this.http.get<Product>(url+'/'+productID);
  }
  updateProduct(product,productId): Observable<Product> {
    return this.http.put<Product>(url+'/'+productId,product);
  }

  deleteProduct(productId): Observable<Product> {
    return this.http.delete<Product>(url+'/'+productId);
  }
  searchCatProduct(catId): Observable<Product> {
    return this.http.get<Product>(url+'?category_id='+catId);
  }
  searchDateProduct(date): Observable<Product> {
    return this.http.get<Product>(url+'date='+date);
  }
  viewAllProducts(): Observable<Product> {
    return this.http.get<Product>(url);
  }
}
