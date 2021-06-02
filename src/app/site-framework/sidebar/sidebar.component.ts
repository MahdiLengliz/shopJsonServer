import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../categories/service/category.service';
import {Category} from '../../categories/model/category';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
categoryList:Category;
catId:number
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {

    this.categoryService.getCategory().subscribe(data =>{
      this.categoryList=data

    })
  }

}
