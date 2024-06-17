import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  constructor() { }

  // 1st method to add a class to the element
  @HostBinding('className')
  get cssClasses() {
    return "hostbinding-highlighted"
  }
  
  // 2nd method to add a class to the element
  // @HostBinding('class.hostbinding-highlighted')
  // get cssClasses() {
  //   return true;
  // }
  
  // adds styling using the style.border property of the element
  // @HostBinding('style.border')
  // get cssClasses() {
  //   return "1px solid red";
  // }
  // 1st method to add a class to the element
  // @HostBinding('class.hostbinding-highlighted')
  // get cssClasses() {
  //   return true;
  // }

}
