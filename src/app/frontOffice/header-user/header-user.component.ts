import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent {
  constructor(private authService:AuthService,private router:Router){}

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/auth/signin")
  }
}
