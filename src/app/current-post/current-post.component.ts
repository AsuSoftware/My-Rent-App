import { RestDataService } from './../service/rest-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Icon } from '../interface/Icon';
import { IonSlides } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.scss'],
})
export class CurrentPostComponent implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  currentPost = ''; // this will be contain the post data

  currentImage = 0;

  constructor(public router: Router, private route: ActivatedRoute, private restData: RestDataService) { }

  // this will be the images of current post selected
  gallery: Icon[] = [
    {
      id: '1',
      icon: './assets/img/bmw.png'
    },
    {
      id: '2',
      icon: './assets/img/bmw.png'
    }
  ];

  sliderConfig = {
    initialSlide: 0,
    centeredSlides: true
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
     this.restData.getCurrentPost(params.id).subscribe(data => console.log(data));
    });
  }

  slideChanged() {
    this.slides.getActiveIndex().then(index => {
      this.currentImage = index;
   });
  }

    getCurrentImage(): string {
     return this.gallery[this.currentImage].id;
   }

   getBack(): void {
    this.router.navigate(['/home']);
   }

   rentCar(): void {
     // get id of current car and insert into service variable to can be use for rent
     this.router.navigate(['/rent', { id: this.currentPost }]);
   }
}
