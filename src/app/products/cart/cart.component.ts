import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.cartDetails()
    this.loadCart()
  }
  getCartDetails:any=[]
cartDetails(){
    if(localStorage.getItem('localCart')){
    this.getCartDetails=JSON.parse(localStorage.getItem('localCart'))
      console.log("cart details : "+this.getCartDetails)
    }
}
  incQnt(id_product,quantity){
    for(let i=0;i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].id_p===id_product){
        if(quantity!=5){
        this.getCartDetails[i].qnt=parseInt(quantity)+1}
      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
    this.loadCart()
  }
  decQnt(id_product,quantity){
    for(let i=0;i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].id_p===id_product){
        if(quantity!=1){
          this.getCartDetails[i].qnt=parseInt(quantity)-1}
      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
    this.loadCart()
  }
  total:number=0
  loadCart(){
if (localStorage.getItem('localCart')){
  this.getCartDetails=JSON.parse(localStorage.getItem('localCart'))
  this.total=this.getCartDetails.reduce(function(acc,val){
return acc+(val.prise_p*val.qnt)
  },0)
}
  }
  removeall(){
    localStorage.removeItem('localCart')
    this.getCartDetails=[]
    this.total=0
    this.cartNumber=0
    this.productService.cartSubject.next(this.cartNumber)
  }
  singleDelete(id_product){
    if(localStorage.getItem('localCart')){
      JSON.parse(localStorage.getItem('localCart'))
for(let i=0;i<this.getCartDetails.length;i++){
  if(this.getCartDetails[i].id_p===id_product){
    this.getCartDetails.splice(i,1)
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
    this.loadCart()
    this.cartNumberFunc()
  }
}
    }
  }
  cartNumber:number=0
  cartNumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('localCart'))
    this.cartNumber=cartValue.length
    this.productService.cartSubject.next(this.cartNumber)
  }
}
