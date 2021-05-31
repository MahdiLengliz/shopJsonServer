import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AllProductByDateComponent } from './all-product-by-date/all-product-by-date.component';
import { AllProductByCategoryComponent } from './all-product-by-category/all-product-by-category.component';


@NgModule({
  declarations: [ProductsComponent, CreateProductComponent, ListProductComponent, UpdateProductComponent, DeleteProductComponent, AllProductByDateComponent, AllProductByCategoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
