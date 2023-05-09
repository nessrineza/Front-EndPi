import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;
  wrongAuth=true

  constructor(private authService:AuthService,private router:Router){

  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl('', Validators.required),


    });
  }

  onSubmit(){

    this.authService.Signin(this.loginForm.value).subscribe(data => {
      console.log("data : ",data);
      localStorage.setItem("token",data.accessToken)
      localStorage.setItem("user",data.username)
      localStorage.setItem("user_id",data.id)
      if(data.roles[0] == "ROLE_CLIENT")
        this.router.navigateByUrl("/user/home")
      else if(data.roles[0] == "ROLE_ADMIN")
        this.router.navigateByUrl("/admin/home")
      else
        alert("Role error !!")
    },err => {if(err.error.message == "Error: Wrong password !"){
      this.wrongAuth = false
    }})

  }



}
