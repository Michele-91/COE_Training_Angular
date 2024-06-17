import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererTwo]'
})
export class RendererTwoDirective {

  private isClassApplied = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    if (this.isClassApplied) {
      this.renderer.removeClass(this.el.nativeElement, 'renderer-highlight');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'renderer-highlight');
    }
    this.isClassApplied = !this.isClassApplied;
  }

}
