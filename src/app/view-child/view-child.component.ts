import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  @ViewChild('inputElementRef') inputElement!: ElementRef;

  focusInput() {
    this.inputElement.nativeElement.focus();
  }
}
