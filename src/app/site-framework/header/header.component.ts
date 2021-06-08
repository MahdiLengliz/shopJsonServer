import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../categories/service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
listUsers:any
  role_user=''
  constructor(private catS:CategoryService,private router:Router) { }

  ngOnInit() {
  this.getRole_user()
  }
  getRole_user(){this.role_user=localStorage.getItem('role_user')
    console.log("role users !!"+this.role_user)
  }
  logout() {
    localStorage.removeItem('role_user');
    this.router.navigate(['auth/login']).then(() => {
      window.location.href = window.location.protocol + '//' + window.location.host + '/auth/login';;
    })}

}
