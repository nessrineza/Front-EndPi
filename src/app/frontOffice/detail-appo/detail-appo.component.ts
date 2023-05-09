import { Component, OnInit } from '@angular/core';
import { Appointement } from 'src/app/models/appointement';
import { AppointementService } from '../services/appointement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-appo',
  templateUrl: './detail-appo.component.html',
  styleUrls: ['./detail-appo.component.css']
})
export class DetailAppoComponent implements OnInit{
  appointement:Appointement = new Appointement();
  
  
  idAppointement!:any;
 constructor(private v:ActivatedRoute,private appointementService : AppointementService, private router : Router){}
 ngOnInit(): void {
 /* this.v.paramMap.subscribe(b => {this.idAppointement=b.get('id')})
  console.log(this.idAppointement)
  this.appointementService.getAppponitementId(this.idAppointement).subscribe({
    next: (data:any) => {
      this.appointement = data[0]
    } ,
    error: (error) => console.log(error)
  })*/
  
    this.idAppointement = this.v.snapshot.params['id'];
    console.log(this.idAppointement)
    console.log('idAppointement:', this.idAppointement);
    this.appointementService.getAppponitementId(this.idAppointement).subscribe((data:any)=>{
      this.appointement = data.body
      console.log(data)
    })
  };  
 // this.getAppointments();
 /*this.v.paramMap.subscribe(params => {
  const id = params.get('id');
  this.idAppointement = id;
  console.log(this.idAppointement);
  this.appointementService.getAppponitementId(this.idAppointement).subscribe({
    next: (data:any) => {
      this.appointement = data[0]
    } ,
    error: (error) => console.log(error)
  })
});*/
/*this.v.paramMap.subscribe(params => {
  const id = params.get('id');
  this.idAppointement = id;
  
  console.log('idAppointement:', this.idAppointement);
  this.appointementService.getAppponitementId(this.idAppointement).subscribe({
    next: (data: any) => {
      console.log('appointement:', data);
      this.appointement = data[0];
    },
    error: (error) => console.log(error)
  });
});
}
  
 }*/
 

/* getAppointments(): void {
  this.appointementService.getAppponitementId(this.idAppointement)
    .subscribe(appointement => this.appointement = appointement);
}
}*/

}
