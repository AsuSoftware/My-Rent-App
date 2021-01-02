import { Icon } from './../../interface/Icon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  constructor() { }

  active = 'Car';

  icons: Icon[] = [
    {
      id: 'Car',
      icon: 'fas fa-car'
    },
    {
      id: 'Motorcycle',
      icon: 'fas fa-motorcycle'
    },
    {
      id: 'Boat',
      icon: 'fas fa-ship'
    },
    {
      id: 'Bicycle',
      icon: 'fas fa-bicycle'
    },
    {
      id: 'Van',
      icon: 'fas fa-shuttle-van'
    }
  ];

  ngOnInit() {}

  getCategory(icon: string): void {
   this.active = icon;
  }

}
