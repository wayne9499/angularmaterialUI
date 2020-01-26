import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData() {
    return [
      {
        name: 'John Doe',
        onLine: true
      },
      {
        name: 'Jane Doe',
        onLine: false
      }
    ]
  }
}
