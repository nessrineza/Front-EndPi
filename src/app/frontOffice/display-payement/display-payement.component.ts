import { Component, OnInit } from '@angular/core';
import { Payement } from 'src/app/models/Payement';
import { PayementService } from '../services/payement.service';
import { Router } from '@angular/router';
import { Type } from 'src/app/models/type';

@Component({
  selector: 'app-display-payement',
  templateUrl: './display-payement.component.html',
  styleUrls: ['./display-payement.component.css']
})
export class DisplayPayementComponent implements OnInit{
  payement:Payement = new Payement();
  payements!: Payement[];
  type = Type;
  constructor(private payementService: PayementService,
    private router: Router){}
  ngOnInit(): void {
    this.getAllPayement();
  }
  getAllPayement(): void {
    this.payementService.getAllPayement()
      .subscribe(payements => this.payements = payements);
  }
  delete(id:any)
  {
    this.payementService.deletePayement(id).subscribe({
      next : ()=> this.payements=this.payements.filter((P) => P.id != id)
    });
  }


}
