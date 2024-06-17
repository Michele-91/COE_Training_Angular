import { Component } from '@angular/core';

@Component({
  selector: 'app-sharing-data-parent',
  templateUrl: './sharing-data-parent.component.html',
  styleUrls: ['./sharing-data-parent.component.scss']
})
export class SharingDataParentComponent {
  parentMessage: string = 'Hello from Parent Component!';
  messageFromChild: string = "";

  receiveMessageFromChild(message: string) {
    console.log("message: ", message);
    this.messageFromChild = message;
  }
}
