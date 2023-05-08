import { Component, OnInit } from '@angular/core';
import { Appointement } from '../../models/appointement';
import { AppointementService } from '../services/appointement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-appointement',
  templateUrl: './detail-appointement.component.html',
  styleUrls: ['./detail-appointement.component.css']
})
export class DetailAppointementComponent implements OnInit {
  appointement:Appointement = new Appointement();
  appointements!: Appointement[];
  constructor(private appointementService: AppointementService,
    private router : Router,
    private route: ActivatedRoute){}
  ngOnInit(): void {
    this.getAppointments();
   this.appointementService.getAllAppointement().subscribe(data => {
    this.appointements = data;
    console.log(this.appointements);
  });
  const id = this.route.snapshot.paramMap.get('id');
  this.appointementService.getAppponitementId(id)
    .subscribe(res => {
      this.appointement = res.body;
    }, err => {
      console.log(err);
    });
      
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
  redirection2(id: any) {
    this.router.navigate([`/detail-appo/${id}`]);

  }
  refresh() {
    const id = this.route.snapshot.paramMap.get('id');
    this.appointementService.getAppponitementId(id)
      .subscribe(res => {
        this.appointement = res.body;
      }, err => {
        console.log(err);
      });
  }
  triggerReminder() {
    this.appointementService.getReminders().subscribe(
      data => {
        console.log(data); // handle success response
        this.displayNotification();
      },
      error => console.log(error) // handle error response
    );
  }

  displayNotification() {
    if (Notification.permission === 'granted') {
      const notification = new Notification('Reminder', {
        body: 'You have an appointment tomorrow',
        icon: 'assets/notification-icon.png'
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          const notification = new Notification('Reminder', {
            body: 'You have an appointment tomorrow',
            icon: 'assets/notification-icon.png'
          });
        }
      });
    }
  }
}
