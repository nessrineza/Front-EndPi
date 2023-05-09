import { Announcement } from 'src/app/Models/announcement';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnouncmentService } from 'src/app/services/announcment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit{



  onSelectFile: boolean = false
  errorMessage: string = '';
  file!: string;
  annonceForm!: FormGroup<any>


  constructor(
    public annoceService: AnnouncmentService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }
  ngOnInit(): void {
  this.infoForm
  console.log(this.annonceForm)
  console.log(this.annoceService.dataForm)
  }

  infoForm() {
    this.annonceForm = this.fb.group({
      location:  ['', [Validators.required]],
      description: ['', [Validators.required]],
      priceA: [0, [Validators.required]],
      usId: [0, [Validators.required]],
      //picture: ['', [Validators.required]],
    });
  }
  addAnnonce() {



  const p=this.annonceForm.value;
  console.log(p)
    this.annoceService.addTask(p )

      .subscribe((res: any) => {
        console.log(res)
        Swal.fire({
          'icon': 'success',
          'text': 'Annoce added successfully !'
        })
        this.router.navigateByUrl("/listannonce")
      }, err => {
        Swal.fire({
          'icon': 'error',
          'text': 'Missed Informations !'
        })
      })

  }
}
