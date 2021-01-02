import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  @Output() menuAction:EventEmitter<boolean> = new EventEmitter();

  menuState = false; // it's close by default

  constructor() { }

  changeMenu(): void {
    this.menuState = !this.menuState;
    this.menuAction.emit(this.menuState);
  }
}
