import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user/user.service';
import { User } from '../types/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  images: String[] = ['../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg'];
  users: User[];
  constructor(private router: Router, private user_service: UserService) { }

  ngOnInit() {
    this.users = this.user_service.getUsers();
  }

  ionViewDidEnter() {
  }

  getUserName(): string {
    return this.users.find(user => user.name === this.getPath())?.name
  }

  getUserProfileImage(): string {
    return this.users.find(user => user.name === this.getPath())?.profile_image;
  }

  getUserFollowers(): number {
    return this.users.find(user => user.name === this.getPath())?.followers;
  }	

  getUserFollowing(): number {
    return this.users.find(user => user.name === this.getPath())?.following;
  }

  getUserBio(): string {
    return this.users.find(user => user.name === this.getPath())?.bio;
  }

  getPath() {
    return this.router.url.split('/')[1];
  }
}
