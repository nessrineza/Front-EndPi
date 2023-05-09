import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private router:Router,private authService:AuthService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (localStorage.getItem("token") != null && localStorage.getItem("user") != null && localStorage.getItem("user_id") != null ) {
      //console.log("checking token storage token"+this.tokenStorage.getToken())
      //console.log("checking token storage user"+this.tokenStorage.getUser())

      //this.authService.checkToken().subscribe(data => {console.log(data)},err=>{this.tokenStorage.signOut()})


      return true;
    }else{

      this.router.navigateByUrl('/auth');
      return false;
    }
  }

}
