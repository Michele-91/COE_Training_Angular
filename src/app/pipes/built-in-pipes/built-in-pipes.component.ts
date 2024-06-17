import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.scss']
})
export class BuiltInPipesComponent {
  today: Date = new Date();
  price: number = 1234.56;
  object = { name: 'John', age: 30 };
  promise = new Promise((resolve) => {
    setTimeout(() => resolve('Async Pipe Example'), 2000);
  });
}
