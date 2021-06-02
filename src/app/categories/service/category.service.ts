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

  getCategory():Observable<Category> {
    return  this.httpC.get<Category>(this.url);
  }
}
