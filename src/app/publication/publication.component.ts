import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/shared/model/publication';
import { PublicationService } from 'src/app/shared/service/publication-service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-Publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  listPublications : any;
  form : boolean = false;
   publication!: Publication;
   closeResult! : string;

  constructor(private publicationService : PublicationService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllPublications();

    this.publication = {
      id:null,
  subject:null,
  description:null,
date:null,
verif:null,
report:null,
favoris:null
    }
  }

  getAllPublications(){
    this.publicationService.getAllPublications().subscribe(res => this.listPublications = res)
  }

  addPublication(p: any){
    this.publicationService.addPublication(p).subscribe(() => {
      this.getAllPublications();
      this.form = false;
      this.ngOnInit();

    });
  }

  editPublication(publication : Publication){
    this.publicationService.editPublication(publication).subscribe();
  }
  deletePublication(idPublication : any){
    this.publicationService.deletePublication(idPublication).subscribe(() => this.getAllPublications());
    this.ngOnInit();

  }
  open(content: any) {
  this.modalService.open(content, {centered: true,size: 'xl',scrollable: true }).result.then((result: any) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason: any) => {
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
}
