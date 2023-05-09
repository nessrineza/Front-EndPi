import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Appointement } from 'src/app/models/appointement';
@Component({
  selector: 'app-full-calander',
  templateUrl: './full-calander.component.html',
  styleUrls: ['./full-calander.component.css']
})
export class FullCalanderComponent implements OnInit{
  appointement:Appointement = new Appointement();
  appointements!: Appointement[];

  calendarOptions : CalendarOptions = {
    plugins : [
      dayGridPlugin,
      interactionPlugin,
    ],
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this)
  }
  
  title = 'fullcal';
  
  Events: any[] = [];
  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    /*this.httpClient
    .get<Appointement[]>('http://localhost:8090/SpringMVC/Appointement/all')
    .subscribe((res: any) => {
      this.Events = res;
      this.calendarOptions.events = this.Events;
    });*/
    this.httpClient
    .get<Appointement[]>('http://localhost:8090/SpringMVC/Appointement/all')
    .subscribe((res: any) => {
      this.appointements = res;
      this.Events = this.appointements.map((appointment) => {
        return {
          title: 'Appointment',
          start: new Date(appointment.appointmentDate + ' ' + appointment.appointmentStartTime),
          end: new Date(appointment.appointmentDate + ' ' + appointment.appointmentEndTime),
        };
      });
      this.calendarOptions.events = this.Events;
    });
  }
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
}
