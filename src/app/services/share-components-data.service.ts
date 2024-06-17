import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This makes the service available application-wide as a singleton
})

export class ShareComponentsDataService {

  private data: any[] = [];

  constructor() {}

  addData(item: any) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}
