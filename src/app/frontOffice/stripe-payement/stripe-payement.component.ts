import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-stripe-payement',
  templateUrl: './stripe-payement.component.html',
  styleUrls: ['./stripe-payement.component.css'],
  animations: [
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class StripePayementComponent implements OnInit{
  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51N4p7hAdExCSXeuwuWgSN3fODmZExpfC7qSEe2vI758NemnaxHljU7Rw9IP8jvEHCcYcFOQ0rnylUbEkjm5Cklcd00EtyH8ho5';
constructor(){}
ngOnInit(): void {
  this.invokeStripe();
    
}
makePayment(amount: any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: this.stripeAPIKey,
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    },
  });
  paymentHandler.open({
    name: 'ItSolutionStuff.com',
    description: '3 widgets',
    amount: amount * 100,
  });
}


/*------------------------------------------
--------------------------------------------
invokeStripe() Function
--------------------------------------------
--------------------------------------------*/
invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');

    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: this.stripeAPIKey,
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!');
        },
      });
    };

    window.document.body.appendChild(script);
  }
}
}
