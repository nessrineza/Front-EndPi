import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stockService } from '../service/stock.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  stockForm!:FormGroup;
  showSubjectInput = true;
  isFormValid = false; // ajouter une variable pour vérifier la validité du formulaire

    constructor(private stockservice: stockService ,private fb:FormBuilder, private router :Router) {

      this.stockForm = this.fb.group({
       quantity :[null,[Validators.required]],
          quantityMin :[null,[Validators.required]],
          libelleStock :[null,[Validators.required]],
          cheked :[null,[Validators.required]],
          createdAt :[null,[Validators.required]],
          updatedAt :[null,[Validators.required]]
      })
}


// Méthode pour vérifier la validité du formulaire
checkFormValidity() {
  this.isFormValid = this.stockForm.valid;
}
AddStocks() {
  this.stockservice.AddStock(this.stockForm.value).subscribe({
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
      console.log(error)
    }
  });
}

reloadComponent() {
  // Reload the component
  const currentUrl = this.router.url;
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/admin/Stocks']);
  });
}



ngOnInit() {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
    // Vérifier si le sujet est vide et afficher le contrôle de saisie
    if (!this.stockForm.get('subject')?.value) {
      this.showSubjectInput = true;
      const subjectControl = this.stockForm.get('subject');
      if (subjectControl) {
        subjectControl.setValidators([Validators.required]);
      }
    }
  }
  // Vérifier la validité du formulaire lors de l'initialisation
  this.checkFormValidity();
}

}

