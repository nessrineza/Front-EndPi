import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/model/comment';
import { CommentService } from 'src/app/shared/service/comment.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Publication } from '../shared/model/publication';
import { PublicationService } from '../shared/service/publication-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})


export class CommentComponent {


  listComments : any;
  form : boolean = false;
   comment!: Comment;
   publication!:Publication;
   closeResult! : string;
   idPub:any;
   url:any;

  constructor(private commentService : CommentService,private modalService: NgbModal,
    private route:ActivatedRoute,private publicationService:PublicationService,private location: Location,private router:Router,private http: HttpClient) { }



  ngOnInit(): void {
this.idPub=this.route.snapshot.paramMap.get('idPub');
this.getOnePublication();
this.getAllComments();

this.url = this.location.prepareExternalUrl(this.location.path());


    this.comment = {
      id:null,
  content:null,
likes:null,
verif:null,
report:0,
unlikes:null,
date:new Date(),
pseudo:null
    }

  }




  checkSimilarity(text: string, apiKey: string): Observable<number> {
    const body = {
      document: {
        text: text
      }
    };

    const headers = {
      'Content-Type': 'application/json',
      'Api-Key': apiKey
    };

    return this.http.post<any>(`https://api.ithenticate.com/v1/documents/check_similarity`, body, { headers }).pipe(
      map(response => response.similarity_score)
    );
  }







  getAllComments(){
    this.commentService.getAllComments(this.idPub).subscribe(res => this.listComments = res)
  }
  getOnePublication(){this.commentService.getOnePublication(this.idPub).subscribe(res => this.publication=res)}

  addComment(p: any){
    this.commentService.addComment(p,this.idPub).subscribe(() => {
      this.getAllComments();
      this.form = false;
      this.ngOnInit();

    });
  }

  editComment(Comment : Comment){
    this.commentService.editComment(Comment).subscribe();
  }
  likeComment(idComment:any,comment:any){this.commentService.likeComment(idComment,comment).subscribe();}
  reportComment(idComment:any,comment:any){this.commentService.reportComment(idComment,comment).subscribe();}
  hahaComment(idComment:any,comment:any){this.commentService.hahaComment(idComment,comment).subscribe();}

  deleteComment(idComment : any){
    this.commentService.deleteComment(idComment).subscribe(() => this.getAllComments());
    this.ngOnInit();

  } likePublication(idpublication:any,publication:any)
  {this.publicationService.likePublication(idpublication,publication).subscribe();}
  reportPublication(idpublication:any,publication:any)
  {this.publicationService.reportPublication(idpublication,publication).subscribe();}
  reloadComponent() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([CommentComponent]);
    });}





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


function fetchData(): any {
  throw new Error('Function not implemented.');
}

