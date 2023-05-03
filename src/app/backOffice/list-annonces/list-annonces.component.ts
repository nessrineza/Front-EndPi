import { Announcement } from './../../Models/announcement';
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { AnnouncmentService } from 'src/app/services/announcment.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css'],
})
export class ListAnnoncesComponent {
  listAnnonce: Array<Announcement> = [];
  announcement= new Announcement();
  selectedCategory = null;
  constructor(
    private annonceService: AnnouncmentService,
    private router: Router,
    


  ) {}

  ngOnInit(): void {
    return this.getAllCategories();
  }
  getAllCategories(): void {
    this.annonceService.getAnnonceList().subscribe((data: Announcement[]) => {
      this.listAnnonce = data;
    });
  }

  redirection(id: any) {
    this.router.navigate([`/updateannonce/${id}`]),
    console.error();
    ;
  }

  Delete(id: any) {
    this.annonceService.deleteProduct(id).subscribe(
      () => (this.listAnnonce = this.listAnnonce.filter((t) => t.id !== id)),
      (data: any) => {
        console.log(data);
        console.log(id);
      }
    );
  }
  currentPage = 1;
  searchText: string = '';
}
