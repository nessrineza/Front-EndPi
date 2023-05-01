import { Component, OnInit } from '@angular/core';
import { Appointement } from '../../models/appointement';
import { AppointementService } from '../services/appointement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-appointement',
  templateUrl: './detail-appointement.component.html',
  styleUrls: ['./detail-appointement.component.css']
})
export class DetailAppointementComponent implements OnInit {
  appointement:Appointement = new Appointement();
  appointements!: Appointement[];
  constructor(private appointementService: AppointementService,
    private router : Router){}
  ngOnInit(): void {
    this.getAppointments();
      
  }
  getAppointments(): void {
    this.appointementService.getAllAppointement()
      .subscribe(appointments => this.appointements = appointments);
  }
  delete(id:any)
  {
    this.appointementService.deleteAppointement(id).subscribe({
      next : ()=> this.appointements=this.appointements.filter((A) => A.id != id)
    });
  }

}
