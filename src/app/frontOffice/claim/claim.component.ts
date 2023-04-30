import { Component, OnInit } from '@angular/core';
import { Claim } from '../../models/Claim';
import { ClaimService } from '../service/claim.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit{
  Claim:Claim = new Claim();
  Claims!: Claim[];
  constructor(private ClaimService: ClaimService,
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
    this.ClaimService.addClaim(this.Claim).subscribe({
      next : () => this.router.navigateByUrl('/Claims'),
      error : (error) => console.log(error)
    });
  }
}
