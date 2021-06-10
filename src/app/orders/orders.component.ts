import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {OrderService} from './service/order.service';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
total=0
  refOrder
  constructor(private formBuilder:FormBuilder,private matDialog:MatDialog,
              private orderService:OrderService,private toastr:ToastrService,private datePipe:DatePipe) { }
  orderForm=this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    mobile:['',Validators.required],
    address:['',Validators.required]
  })

  ngOnInit() {
    this.refOrder= Math.random().toString(36).substr(2, 9);
    this.cartDetails()
  this.total=parseInt(localStorage.getItem('total'))
  }
  saveForm(){
    console.log("form : "+this.orderForm.value)
   let mydate=new Date()
    let myDate = this.datePipe.transform(mydate, 'yyyy-MM-dd');
    let newOrder={
      id:Math.floor((Math.random() * 10000) + 1),
      order_ref:this.refOrder,
      order_date: myDate,
      firstname: this.orderForm.value.firstName,
      lastname: this.orderForm.value.lastName,
      phone: this.orderForm.value.mobile,
      address: this.orderForm.value.address,
      price_total: parseInt(localStorage.getItem('total'))
    }
    this.orderService.addOrders(newOrder).subscribe((data)=>{
      return this.toastr.success('orders added !')
      console.log(data)
    },error => {
      return this.toastr.error(error.message)

    })
  }
  closeForm(){
this.matDialog.closeAll()
  }
  getCartDetails:any=[]
  cartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart'))
      console.log("cart details : "+this.getCartDetails)
    }
  }
}
