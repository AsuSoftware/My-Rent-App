import { Router } from '@angular/router';
import { LocalDataService } from './../service/local-data.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private menuService: MenuService,
              private animationCtrl: AnimationController,
              private localData: LocalDataService,
              private router: Router) { }

  menuState = false; // by default it's closed

  ngOnInit() {
    (this.localData.getLocalData() !== null) ? this.router.navigate(['/home']) : this.router.navigate(['/my-rent']);
    this.menuService.menuAction.subscribe((res) => { this.menuState = res; this.action(); });
  }

  action(): void {
    if (this.menuState === true) {
      const animation: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('.container-home'))
      .duration(500)
      .iterations(1)
      .fromTo('borderRadius', '0px', '25px')
      .fromTo('transform', 'translate(0, 0)', 'translate(64%, 17%)')
      animation.play();
    } else {
      const animation: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('.container-home'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translate(64%, 17%)', 'translate(0, 0)')
      .fromTo('borderRadius', '25px', '0')
      animation.play();
    }
  }

  menu(): void {
    this.menuService.changeMenu(); // call menu service to open/close menu
  }

  onPostClick(id: string): void {
    this.router.navigate(['/current', { id }]);
  }

}
