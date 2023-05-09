import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnouncmentService } from 'src/app/services/announcment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-annonce-add',
  templateUrl: './annonce-add.component.html',
  styleUrls: ['./annonce-add.component.css']
})
export class AnnonceAddComponent {


  onSelectFile: boolean = false
  errorMessage: string = '';
  file!: string;



  constructor(
    public annoceService: AnnouncmentService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }
  ngOnInit(): void {
  this.infoForm
  this.annoceService.dataForm = this.fb.group({
    location:  ['', [Validators.required]],
    description: ['', [Validators.required]],
    priceA: [0, [Validators.required]],
    usId: [0, [Validators.required]],
    //picture: ['', [Validators.required]],
  });
  console.log(this.annoceService.dataForm)
  console.log(this.annoceService.dataForm)
  //notification
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
  }

  infoForm() {
    this.annoceService.dataForm = this.fb.group({
      location:  ['', [Validators.required]],
      description: ['', [Validators.required]],
      priceA: [0, [Validators.required]],
      usId: [0, [Validators.required]],
      //picture: ['', [Validators.required]],
    });
  }
  addAnnonce() {
 // Créer une notification lorsque l'annonce est ajoutée
 if (Notification.permission === 'granted') {
  new Notification('Annonce Added!', {
    body: 'Your Annonce has been successfully added!',
    icon: 'assets/notification-icon.png'
  });
}


  const p=this.annoceService.dataForm.value;
  console.log(p)
    this.annoceService.addTask(p )

      .subscribe((res: any) => {
        console.log(res)
        Swal.fire({
          'icon': 'success',
          'text': 'Annoce added successfully !'
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
