import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-all-product-by-category',
  templateUrl: './all-product-by-category.component.html',
  styleUrls: ['./all-product-by-category.component.css']
})
export class AllProductByCategoryComponent implements OnInit {
searchCategory = '';
productList:Product;
  constructor(private activateRoute: ActivatedRoute,private serviceProduct:ProductService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.searchCategory = data.id;
      console.log(this.searchCategory)
    });
    this.serviceProduct.searchCatProduct(this.searchCategory).subscribe((dataCat)=>{
      console.log("zaaaaaaaaaaaaaaaaaaaaaaaaaazzz"+dataCat.productName)
      this.productList=dataCat;
    })
  }

}
