import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 url = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) { }
  createProduct(product) {
    this.http.post(this.url , product);
  }
  viewProduct(productID) {
    this.http.get(this.url + productID);
  }
  updateProduct(product, productId) {
    this.http.put(this.url + productId , product);
  }
  deleteProduct(productId) {
    this.http.delete(this.url + productId);
  }
  searchCatProduct(catId) {
    this.http.get(this.url + 'category=' + catId);
  }
  searchDateProduct(date) {
    this.http.get(this.url + 'date=' + date);
  }
  viewAllProducts() {
    this.http.get(this.url);
  }
}
