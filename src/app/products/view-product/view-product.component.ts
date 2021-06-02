import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productId = 0;
productList:Product
  constructor(private activateRoute: ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.productId = data.id;
    });
    this.productService.viewProduct(this.productId).subscribe(dataP =>{
      this.productList=dataP;
    });
  }

}
