import { Component, OnInit} from '@angular/core';
import { IonImg } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  images: string[] = ['one.png', 'two.png', 'three.png', 'four.png'];
  image_index = 0;
  image = '../../assets/start_imgs/two.png';
  parallaxIsHidden = true;

  constructor() {}

  ngOnInit() {
    setInterval(()=> {
      setTimeout(() => {
        this.parallaxIsHidden = true;
        this.image = '../../assets/start_imgs/' + this.nextImage();
      }, 300)
      this.parallaxIsHidden = false;
    }, 5000)

  }

  nextImage(): string {
    if (this.image_index == 0) {
      this.image_index++;
      return this.images[0];
    } else if (this.image_index == this.images.length-1) {
      this.image_index = 0;
      return this.images[this.images.length-1];
    } else {
      this.image_index++;
      return this.images[this.image_index-1];
    }
  }

}
