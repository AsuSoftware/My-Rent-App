import { MenuService } from './../service/menu.service';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(private menu: MenuService) { }

 // menuState = false; // it's close by default

  ngOnInit() {
  //  this.menu.menuAction.subscribe((data) => this.menuState = data);
  }
}
