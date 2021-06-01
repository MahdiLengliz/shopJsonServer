import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-product-by-category',
  templateUrl: './all-product-by-category.component.html',
  styleUrls: ['./all-product-by-category.component.css']
})
export class AllProductByCategoryComponent implements OnInit {
searchCategory = '';
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(data => {
      this.searchCategory = data.category;
    });
  }

}
