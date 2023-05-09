import { Announcement } from './../../Models/announcement';
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { AnnouncmentService } from 'src/app/services/announcment.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ListAnnoncesComponent {
  listAnnonce: Array<Announcement> = [];
  listDto: Array<any> = [];
  announcement= new Announcement();
  selectedCategory = null;
  closeResult! : string;
  form : boolean = false;
  location:any;
  p:number=1;
  constructor(
    private annonceService: AnnouncmentService,
    private router: Router,
    private modalService: NgbModal



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

  Delete(id: any)
   {
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

  editAnnonce(annonce: Announcement){
    this.annonceService.UpdateAnnouncement(annonce).subscribe();
  }

  verifyAnnonce(id: number){
    this.annonceService.verify(id).subscribe();
    window.location.reload();
  }

  getAllDto(): void {
    this.annonceService.getDtoList().subscribe((data: any[]) => {
      this.listDto = data;
    });
  }

  exportPdfDTO(){
    this.annonceService.exportPdfDTO().subscribe(x=>{
      const blob = new Blob([x], {type :'application/pdf'});
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download ='Devis DTO.pdf';
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
      setTimeout(function() {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    });
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    closeForm(){

    }
    cancel(){
      this.form = false;
    }

    Search(){
      if(this.location ==""){
        this.ngOnInit();
      }
      else{
        this.listAnnonce=this.listAnnonce.filter(res =>{
           return res.location.toLocaleLowerCase().match(this.location.toLocaleLowerCase());
        });
      }
    }

}
