import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { Announcement } from 'src/app/Models/announcement';
import { category } from 'src/app/Models/category';
import { AnnouncmentService } from 'src/app/services/announcment.service';


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  annonce: Announcement = new Announcement();


  constructor(
    public annonceService: AnnouncmentService,
    private router: Router,

  ) {}

  ngOnInit(): void {


  }



  ajouter(){
    //this.productService.addProduct(this.product);
    this.annonceService.addAnnouncement(this.annonce).subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/admin/listannonce']);
    });


}
}
