import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user/user.service';
import { User } from '../types/User';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  users: User[];
  constructor(private router: Router, private user_service: UserService) { }

  ngOnInit() {
    this.users = this.user_service.getUsers();
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

  getPath() {
    return this.router.url.split('/')[3]
  }

}
