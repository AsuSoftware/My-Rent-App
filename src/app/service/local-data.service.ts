import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  setLocalData(id: string): void {
    sessionStorage.setItem('userId', id);
  }

  getLocalData(): string {
    return sessionStorage.getItem('userId');
  }
}
