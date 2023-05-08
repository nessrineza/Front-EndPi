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
   /* this.appointementService.add(this.appointement)
        .subscribe((res:any) => this.router.navigateByUrl("user/DetailAppointementComponent"),
        err => console.log(err));
       */
          this.appointementService.add(this.appointement).subscribe(
            appointement => {
              this.displayNotification('Appointment added successfully!');
            },
            error => {
              console.log('Error adding appointment:', error);
            }
          );
        }
      
        
       /* public addAppointment(appointment: Appointement): void {
          this.appointementService.checkIfAppointmentExists(appointment).subscribe(
            appointmentExists => {
              if (appointmentExists) {
                // Show pop-up to inform the user that the appointment already exists
                console.log('Appointment already exists');
              } else {
                this.appointementService.add(appointment).subscribe(
                  newAppointment => {
                    console.log('Appointment added successfully');
                    // Do something with the new appointment, e.g. navigate to a different page
                  },
                  error => {
                    console.error('Failed to add appointment', error);
                    // Show an error message to the user
                  }
                );
              }
            },
            error => {
              console.error('Failed to check if appointment exists', error);
              // Show an error message to the user
            }
          );
        }*/
      
  redirection2(id: any) {
    if (id) {
      this.router.navigate(['/detail-appo', id]);
    }
  }
  
  displayNotification(message: string) {
    if (Notification.permission === 'granted') {
      const notification = new Notification('Appointment', {
        body: message,
        icon: 'assets/notification-icon.png'
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          const notification = new Notification('Appointment', {
            body: message,
            icon: 'assets/notification-icon.png'
          });
        }
      });
    }
  }


}
