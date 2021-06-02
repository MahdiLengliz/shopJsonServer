import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
productList:Product
  constructor(private serviceProduct:ProductService) { }

  ngOnInit() {
  this.serviceProduct.viewAllProducts().subscribe(data=>{
    this.productList=data;
  })
  }

}
