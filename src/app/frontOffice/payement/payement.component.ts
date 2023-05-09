import { Component, OnInit } from '@angular/core';
import { PayementService } from '../services/payement.service';
import { Router } from '@angular/router';
import { Payement } from 'src/app/models/Payement';
import { Type } from 'src/app/models/type';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
  paymentMethods = Object.values(Type);
  payement:Payement = new Payement();
  payements!: Payement[];
  constructor( private payementService : PayementService,
    private router : Router){}
  ngOnInit(): void {
      
  }
  ajouter(){

    this.payementService.add(this.payement).subscribe({
      next : () => this.router.navigateByUrl('/payement'),
      error : (error) => console.log(error)
    });
   
}
}