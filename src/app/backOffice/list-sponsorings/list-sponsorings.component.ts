import { Component } from '@angular/core';
import { Sponsoring } from 'src/app/Models/sponsoring';
import { SponsoringService } from 'src/app/services/sponsoring.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-sponsorings',
  templateUrl: './list-sponsorings.component.html',
  styleUrls: ['./list-sponsorings.component.css']
})
export class ListSponsoringsComponent {
  listSponsoring : Array<Sponsoring>=[];
  selectedCategory =null;
  closeResult! : string;
  form : boolean = false;
  p:number=1;
  type:any;
  constructor(private sponsoringService:SponsoringService, private modalService: NgbModal) { }

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

  editSponsoring(sponsoring: Sponsoring){
    this.sponsoringService.updateSponsoring(sponsoring).subscribe();
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
      if(this.type ==""){
        this.ngOnInit();
      }
      else{
        this.listSponsoring=this.listSponsoring.filter(res =>{
           return res.type.toLocaleLowerCase().match(this.type.toLocaleLowerCase());
        });
      }
    }
}


