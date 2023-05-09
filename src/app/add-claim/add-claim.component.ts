import { Component, OnInit } from '@angular/core';
import { ClaimServicesService } from '../service/claim-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-claim',
  templateUrl:'./add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})

export class AddClaimComponent implements OnInit {
  claimForm!: FormGroup;
  showSubjectInput = true;
  isFormValid = false; // ajouter une variable pour vérifier la validité du formulaire

  constructor(
    private claimservice: ClaimServicesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.claimForm = this.fb.group({
      subject: [null, [Validators.required]],
      date: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  
  // Méthode pour vérifier la validité du formulaire
  checkFormValidity() {
    this.isFormValid = this.claimForm.valid;
  }

  AddClaim() {
    

    this.claimservice.AddClaims(this.claimForm.value).subscribe({
      next: (Response) => {
        console.log(Response);
        
        this.reloadComponent(); // Call function to reload component
        

        // Créer une notification lorsque la réclamation est ajoutée
        if (Notification.permission === 'granted') {
          new Notification('Claim Sent', {
            body: 'Your claim has been successfully sent!',
            icon: 'assets/notification-icon.png'
          });
        }
        // Vérifier la validité du formulaire avant la soumission
    if (!this.isFormValid) {
      return;
    }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  reloadComponent() {
    // Reload the component
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/user']);
    });
  }
  ngOnInit() {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
      // Vérifier si le sujet est vide et afficher le contrôle de saisie
      if (!this.claimForm.get('subject')?.value) {
        this.showSubjectInput = true;
        const subjectControl = this.claimForm.get('subject');
        if (subjectControl) {
          subjectControl.setValidators([Validators.required]);
        }
      }
    }
    // Vérifier la validité du formulaire lors de l'initialisation
    this.checkFormValidity();
  }

}