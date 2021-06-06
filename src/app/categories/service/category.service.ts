import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
url= 'http://localhost:3000/category'
  constructor(private httpC:HttpClient) { }

  getCategory():Observable<any> {
    return  this.httpC.get(this.url);
  }
  getUser():Observable<any>{
  return this.httpC.get("http://localhost:3000/users");
  }
}
