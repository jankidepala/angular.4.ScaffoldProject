import { Injectable } from '@angular/core';

@Injectable()
export class PatientDataService {
  message= 'Hello from the other side!!';

  items: Array<any> = [
    { id: 0, name: 'Pascal Precht', country: 'Germany'},
    { id: 1, name: 'Christoph Burgdorf', country: 'Germany'},
    { id: 2, name: 'Thomas Burleson', country: 'United States'}
  ];
  getItems() {
    return this.items;
  }
  constructor() { }

}
