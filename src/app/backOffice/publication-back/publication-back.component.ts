import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/shared/model/publication';
import { PublicationService } from 'src/app/shared/service/publication-service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-publication-back',
  templateUrl: './publication-back.component.html',
  styleUrls: ['./publication-back.component.css']
})
export class PublicationBackComponent {
  public tools: Object = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
};
  listPublications : any;
  form : boolean = false;
   publication!: Publication;
   closeResult! : string;
text:any;
  constructor(private publicationService : PublicationService,private modalService: NgbModal,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllPublications();

    this.publication = {
      id:null,
  subject:null,
  description:null,
date:new Date(),
verif:null,
report:0,
favoris:0
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
  likePublication(idpublication:any,publication:any)
  {this.publicationService.likePublication(idpublication,publication).subscribe();}
  reportPublication(idpublication:any,publication:any)
  {this.publicationService.reportPublication(idpublication,publication).subscribe();}
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

   removeHtmlTagsWithStyle(html: string): string {
    // Create a new DOMParser object
    const parser = new DOMParser();

    // Parse the input HTML string to a DOM object
    const doc = parser.parseFromString(html, 'text/html');

    // Serialize the DOM object back to a string, removing all HTML tags
    const serializer = new XMLSerializer();
    let plainText = serializer.serializeToString(doc.body);

    // Extract the styles from the HTML string and apply them to the plain text
    const styles = Array.from(doc.querySelectorAll('style')).map(style => style.textContent).join('');
    if (styles) {
      plainText = `<style>${styles}</style>${plainText}`;
    }

    return plainText;
  }









}
