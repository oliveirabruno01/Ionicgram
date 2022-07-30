import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  images: String[] = ['../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
