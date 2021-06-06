import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
public productList:Product[]
  constructor(private serviceProduct:ProductService) { }

  ngOnInit() {
  this.viewAllProducts();
  }
  public viewAllProducts() : void{
  this.serviceProduct.viewAllProducts().subscribe((response:Product[])=>{
      this.productList=response;
    },
    (error:HttpErrorResponse) =>{
      alert(error.message)
    }
  )

  }
}
