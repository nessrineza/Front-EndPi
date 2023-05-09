import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.css']
})
export class UserProfileSettingsComponent implements OnInit{

  user!:User
  profileForm!:FormGroup

  constructor(private userService:UserService) {}


  ngOnInit(): void {
    this.loadData()
    this.profileForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),


    });
  }

  Update(){
    this.user.firstName = this.profileForm.value.firstName
    this.user.lastName = this.profileForm.value.lastName
    this.user.phoneNumber = this.profileForm.value.phoneNumber
    console.log(this.user)
    this.userService.updateUser(this.user).subscribe(data => {console.log("data : ",data),this.loadData()})
  }

  loadData(){
    this.userService.getUserById(localStorage.getItem("user_id")).subscribe(data => {console.log("user : ",this.user),this.user = data})

  }

}
