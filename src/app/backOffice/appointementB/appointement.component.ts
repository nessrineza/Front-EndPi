import { Component, OnInit } from '@angular/core';
import { Appointement } from 'src/app/models/appointement';
import { AppointementService } from '../services/appointement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class appointementBComponent implements OnInit{
  appointement:Appointement = new Appointement();
  appointements!: Appointement[];
  
  constructor(private router : Router, private appointementService : AppointementService){}
  
  ngOnInit(): void {
      this.getallAppointement();
      
     
  }
  getallAppointement(){
    this.appointementService.fetchAll()
      .subscribe(appointements => this.appointements = appointements);
  }
 
}
