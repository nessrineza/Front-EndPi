import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AnnouncmentService } from 'src/app/services/announcment.service';
import { Announcement } from './../../Models/announcement';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent {
  onSelectFile: boolean = false
  errorMessage: string = '';
  file!: string;
  annonce: Announcement = new Announcement();


  constructor(
    public annoceService: AnnouncmentService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
  this.infoForm
  this.annoceService.dataForm = this.fb.group({
    id: [null, [Validators.required]],
    location: ['', [Validators.required]],
    description: ['', [Validators.required]],
    priceA: [0, [Validators.required]],
    usId: [0, [Validators.required]],
    //picture: ['', [Validators.required]],
  });
  console.log(this.annoceService.dataForm)
  console.log(this.annoceService.dataForm)
  }

  infoForm() {
    this.annoceService.dataForm = this.fb.group({
      //id:  ['', [Validators.required]],
      location:  ['', [Validators.required]],
      description: ['', [Validators.required]],
      priceA: [0, [Validators.required]],
      usId: [0, [Validators.required]],
      //picture: ['', [Validators.required]],
    });
  }
  addAnnonce() {

  const p=this.annoceService.dataForm.value;
  console.log(p)
    this.annoceService.UpdateAnnouncement(p )

      .subscribe((res: any) => {
        console.log(res)
        Swal.fire({
          'icon': 'success',
          'text': 'annonce updated successfully !'
        })
        this.router.navigateByUrl("/admin/listannonce")
      }, err => {
        Swal.fire({
          'icon': 'error',
          'text': 'Missed Informations !'
        })
      })
  }
}

