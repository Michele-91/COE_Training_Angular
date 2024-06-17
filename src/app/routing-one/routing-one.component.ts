import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-one',
  templateUrl: './routing-one.component.html',
  styleUrls: ['./routing-one.component.scss']
})
export class RoutingOneComponent {
  
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  goToPageTwo() {
    this.router.navigate(['/two']);
  }
}
