import { Component, OnInit } from '@angular/core';
import { ClaimServicesService } from '../service/claim-services.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-list-claim',
  templateUrl: './list-claim.component.html',
  styleUrls: ['./list-claim.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class ListClaimComponent implements OnInit{
  claims:any;
constructor(private claimservice:ClaimServicesService, private router:Router){ }

getallClaims(){
  this.claimservice.GetAllClaims().subscribe(data=>{
    this.claims=data;
  })
}


deleteClaim(id: number){
  this.claimservice.DeleteClaim(id).subscribe();
  this.reloadComponent();
}


reloadComponent(): void {
  const currentRoute = this.router.url.split('?')[0];
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]);
  });
}

pdf(){
  console.log('PDF function called');
  this.claimservice.pdf().subscribe(response => {
    const blob = new Blob([response], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'claim.pdf';
    link.click();
    URL.revokeObjectURL(url);
  }, error => {
    console.log(error);
  });
}



ngOnInit(): void {this.getallClaims();

}


}
