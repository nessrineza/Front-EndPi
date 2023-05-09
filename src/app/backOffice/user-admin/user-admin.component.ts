import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  users!:User[]

  constructor(private userService:UserService) {

  }


  ngOnInit(): void {
    this.loadData();
  }

  delete(idUser:number) {
    this.userService.deleteUser(idUser).subscribe(data => {this.loadData(),console.log("data : ",data)});
  }

  block(idUser:number) {
    this.userService.blockUser(idUser).subscribe(data => {this.loadData(),console.log("data : ",data)})
  }

  unblock(idUser:number){
    this.userService.unblockUser(idUser).subscribe(data => {this.loadData(),console.log("data : ",data)})
  }

  loadData() {
    this.userService.getAllUsers().subscribe(data => {
      console.log("data : ",data)
      this.users = data
      console.log("users : ",this.users)
    })
  }





}
