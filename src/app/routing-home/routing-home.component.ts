import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.scss']
})
export class RoutingHomeComponent {

  constructor(private router: Router) {}

  goToPageOne() {
    this.router.navigate(['/one']);
  }
}
