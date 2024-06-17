import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appElementRef]'
})
export class ElementRefDirective {

  private isClassApplied = false;

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    if (this.isClassApplied) {
      this.el.nativeElement.classList.remove('element-ref-highlight');
    } else {
      this.el.nativeElement.classList.add('element-ref-highlight');
    }
    this.isClassApplied = !this.isClassApplied;
  }

}
