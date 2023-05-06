import { Component, OnInit } from '@angular/core';
import { Appointement } from '../../models/appointement';
import { AppointementService } from '../services/appointement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit{
  appointement:Appointement = new Appointement();
  appointements!: Appointement[];
  imageUrl!: string;
  constructor(private appointementService: AppointementService,
    private router : Router,
    private route: ActivatedRoute,){}
  ngOnInit(): void {
    
  }
 /* ajouter(){

    this.appointementService.add(this.appointement).subscribe({
      next : () => this.router.navigateByUrl('/appointments'),
      error : (error) => console.log(error)
    });

  }*/
  ajouter(){
   /* this.appointementService.add(this.appointement).subscribe({
      next: (newAppointment: Appointement) => {
        // Redirect to appointment detail component with the new appointment ID
        this.router.navigate(['user/DetailAppointementComponent']);

      },
      error: (error) => console.log(error)
    });*/
    this.appointementService.add(this.appointement)
        .subscribe((res:any) => this.router.navigateByUrl("user/DetailAppointementComponent"),
        err => console.log(err));
  }
  redirection2(id: any) {
    if (id) {
      this.router.navigate(['/detail-appo', id]);
    }
  }
  
  


}
