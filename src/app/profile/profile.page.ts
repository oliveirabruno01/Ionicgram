import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user/user.service';
import { User } from '../types/User';
import { Post } from '../types/Post';
import { PostService } from '../api/post/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  images: String[] = ['../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg'];
  users: User[];
  posts: Post[];
  constructor(
    private router: Router, 
    private user_service: UserService,
    private post_service: PostService
    ) { }

  ngOnInit() {
    this.users = this.user_service.getUsers();
    this.post_service.getPosts()
      .subscribe(response => {
        this.posts = response;
      }
    );
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
  
  getUserId(): number {
    return this.users.find(user => user.name === this.getPath())?.id;
  }

  getPostsByUserId(id: number) {
    return this.posts.filter(post => post.author_id === id);
  }

  getPath() {
    return this.router.url.split('/')[1];
  }
}
