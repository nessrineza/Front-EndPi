import { Component } from '@angular/core';
import { Sponsoring } from 'src/app/Models/sponsoring';
import { SponsoringService } from 'src/app/services/sponsoring.service';

@Component({
  selector: 'app-list-sponsorings',
  templateUrl: './list-sponsorings.component.html',
  styleUrls: ['./list-sponsorings.component.css']
})
export class ListSponsoringsComponent {
  listSponsoring : Array<Sponsoring>=[];
  selectedCategory =null;
  constructor(private sponsoringService:SponsoringService) { }

  ngOnInit(): void {
    return this.getAllCategories();
  }
  getAllCategories(): void {
    this.sponsoringService.getSponsoringList().subscribe((data:Sponsoring[])=>{
      this.listSponsoring=data;
    })
  }

  onDelete(product: Sponsoring) {
    this.sponsoringService
      .deleteSponsoring(product)
      .subscribe(
        () =>
          (this.listSponsoring = this.listSponsoring.filter(
            (t) => t.id !== product.id
          ))
      );
  }
}


