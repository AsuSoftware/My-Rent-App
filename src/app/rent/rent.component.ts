import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss'],
})
export class RentComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  confirmRent(): void {
    // trimit la back-end id la vehicul si la user
    // dupa care in back-end rezerv vehiculul la userul respectiv incepand in data respectiva pana in data de sfarsit
   }

}
