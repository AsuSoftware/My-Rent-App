import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private menuService: MenuService, private animationCtrl: AnimationController) { }

  menuState = false; // by default it's closed

  ngOnInit() {
    this.menuService.menuAction.subscribe((res) => this.menuState = res);
    console.log(this.menuState);

  }

  action(): void {
    if (this.menuState === true) {
      const animation: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('.container-nav'))
      .duration(1000)
      .fromTo('transform', 'translate(0, 0)', 'translate(68%, -84%)')
      .fromTo('border-radius', '0px', '25px');
    } else {
      const animation: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('.container-nav'))
      .duration(1000)
      .fromTo('transform', 'translate(68%, -84%)', 'translate(0, 0)')
      .fromTo('border-radius', '25px', '0');
    }
  }

  menu(): void {
    this.menuService.changeMenu(); // call menu service to open/close menu
  }

}
