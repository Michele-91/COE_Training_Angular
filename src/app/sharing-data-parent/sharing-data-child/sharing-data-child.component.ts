import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sharing-data-child',
  templateUrl: './sharing-data-child.component.html',
  styleUrls: ['./sharing-data-child.component.scss']
})
export class SharingDataChildComponent {
  @Input() message: string = ''; // Property bound to parent data
  @Output() messageToParentEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageToParentEvent.emit('Hello from Child Component!');
  }
  
}
