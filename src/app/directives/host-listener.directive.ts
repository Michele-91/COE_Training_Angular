import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.log('Element clicked:', event);
  }

  // @HostListener('mouseover')
  // mouseOver() {
  //   this.highlighted = true;
  // }

}
