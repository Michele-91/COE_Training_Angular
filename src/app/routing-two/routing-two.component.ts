import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-two',
  templateUrl: './routing-two.component.html',
  styleUrls: ['./routing-two.component.scss']
})
export class RoutingTwoComponent {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  goToPageOne() {
    this.router.navigate(['/one']);
  }
}
