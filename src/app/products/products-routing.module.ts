import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {AllProductByCategoryComponent} from './all-product-by-category/all-product-by-category.component';
import {AllProductByDateComponent} from './all-product-by-date/all-product-by-date.component';
import {ViewProductComponent} from './view-product/view-product.component';

const routes: Routes = [{ path: '', component: ProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'list-product', component: ListProductComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'all-product-cat', component: AllProductByCategoryComponent },
  { path: 'view-product', component: ViewProductComponent },
  { path: 'all-product-date', component: AllProductByDateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
