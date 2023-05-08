import { Component, OnInit } from '@angular/core';
import { AppointementService } from '../services/appointement.service';

@Component({
  selector: 'app-reminder',
  template: `
    <button (click)="triggerReminder()">Trigger Reminder</button>
  `
})
export class ReminderComponent implements OnInit{
  constructor(private appointementService : AppointementService){

  }
  ngOnInit(): void {
      
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


