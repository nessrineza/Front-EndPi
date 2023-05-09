import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'welcamp';
  isButtonClicked = false;

  onButtonClick() {
    this.isButtonClicked = true;
  }
}
