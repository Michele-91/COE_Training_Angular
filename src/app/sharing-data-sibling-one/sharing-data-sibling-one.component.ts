import { Component } from '@angular/core';
import { ShareComponentsDataService } from '../services/share-components-data.service';

@Component({
  selector: 'app-sharing-data-sibling-one',
  templateUrl: './sharing-data-sibling-one.component.html',
  styleUrls: ['./sharing-data-sibling-one.component.scss']
})
export class SharingDataSiblingOneComponent {
  newItem: string = '';

  constructor(private dataService: ShareComponentsDataService) {}

  addData() {
    this.dataService.addData(this.newItem);
    this.newItem = '';
  }
}
