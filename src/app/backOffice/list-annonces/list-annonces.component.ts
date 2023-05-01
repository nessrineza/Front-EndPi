import { Component } from '@angular/core';
import { Announcement } from 'src/app/Models/announcement';
import { AnnouncmentService } from 'src/app/services/announcment.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent {
  listAnnonce : Array<Announcement>=[];
  selectedCategory =null;
  constructor(private annonceService:AnnouncmentService) { }

  ngOnInit(): void {
    return this.getAllCategories();
  }
  getAllCategories(): void {
    this.annonceService.getProductList().subscribe((data:Announcement[])=>{
      this.listAnnonce=data;
    })
  }

  onDelete(product: Announcement) {
    this.annonceService
      .deleteProduct(product)
      .subscribe(
        () =>
          (this.listAnnonce = this.listAnnonce.filter(
            (t) => t.id !== product.id
          ))
      );
  }
}


