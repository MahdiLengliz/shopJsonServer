import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../categories/service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
listUsers:any
  rrr='user'
  constructor(private catS:CategoryService) { }

  ngOnInit() {
    this.getUser()
  }
getUser(){
    this.catS.getUser().subscribe(data=>{
      this.listUsers=data
      console.log(this.listUsers)
    })
}
}
