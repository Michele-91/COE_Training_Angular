import { Component } from '@angular/core';
import { ShareComponentsDataService } from '../services/share-components-data.service';

@Component({
  selector: 'app-sharing-data-sibling-two',
  templateUrl: './sharing-data-sibling-two.component.html',
  styleUrls: ['./sharing-data-sibling-two.component.scss']
})
export class SharingDataSiblingTwoComponent {
  data: any[] = [];

  constructor(private dataService: ShareComponentsDataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
