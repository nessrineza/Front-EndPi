import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginForm!: FormGroup;
  wrongAuth = true;

  constructor(private authService:AuthService,private router:Router){

  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),

    });
  }

  onSubmit(){
    this.authService.Signup(this.loginForm.value).subscribe(data => {
      this.router.navigateByUrl("/auth/signin")
      console.log("data : ",data);
    },err => {console.log(err.error.message);if(err.error.message == "Error: Username is already taken!") {
      this.wrongAuth = false;
    }})
  }


}
