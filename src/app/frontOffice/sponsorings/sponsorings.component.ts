import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { Sponsoring } from 'src/app/Models/sponsoring';
import { SponsoringService } from 'src/app/services/sponsoring.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sponsorings',
  templateUrl: './sponsorings.component.html',
  styleUrls: ['./sponsorings.component.css']
})
export class SponsoringsComponent implements OnInit {
  files: string[] = [];
  selectedFiles!: FileList;
  images: string[] = [];
  product: Sponsoring = new Sponsoring();
  errorMessage: string = '';
  userFile: any;
  file!: string;
  public imagePath: any;
  imgURL: any;

  constructor(
    public sponsoringService: SponsoringService,
    private router: Router,
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {

    this.infoForm();
  }
  infoForm() {
    this.sponsoringService.dataForm = this.fb.group({
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priceS: [0, [Validators.required]],
      quantite: [0, [Validators.required]],
      picture: ['', [Validators.required]],
    });
  }


  // // ajouter(){
  // //   //this.productService.addProduct(this.product);
  // //   this.sponsoringService.addTask(this.sponsoring).subscribe({
  // //     next : () => this.router.navigateByUrl('/admin/listsponsoring'),
  // //     error : (error) => console.log(error)
  // //   });

    addsponsoring() {
     // const product = this.sponsoringService.dataForm.value;
     // console.log(product)
      //this.sponsoringService.addTask(product).subscribe((data) => {
      //  this.router.navigate(['/admin/sponsoringlist']);
      //});
      // formData.append('article', JSON.stringify(product));

      // for (let i = 0; i < this.files.length; i++) {
      //   formData.append('files', this.files[i]);
      //   console.log(formData);
      // }

      // formData.append('file', this.userFile);
      //formData.append('file', this.file);
   // }
//}
const product=this.sponsoringService.dataForm.value;
  console.log(product)
    this.sponsoringService.addTask(product)

      .subscribe((res: any) => {
        console.log(res)
        Swal.fire({
          'icon': 'success',
          'text': 'sponsoring added successfully !'
        })
        this.router.navigateByUrl("/user/sponsoringlist")
      }, err => {
        Swal.fire({
          'icon': 'error',
          'text': 'Missed Informations !'
        })
      })

  }
}


