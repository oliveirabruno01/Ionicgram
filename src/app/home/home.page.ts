import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../api/post/post.service';
import { StoryService } from '../api/story/story.service';
import { UserService } from '../api/user/user.service';
import { PostComponent } from '../post/post.component';
import { Post } from '../types/Post';
import { User } from '../types/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public posts: Array<Post> = [];
  public stories: Array<Post> = [];
  public users: Array<User> = [];
  
  constructor(
    private posts_service: PostService, 
    private storie_service: StoryService,
    private users_service: UserService,
    ) {}

  onInit() {
  }

  ionViewDidEnter() {
    this.posts = this.posts_service.getPosts();
    this.stories = this.storie_service.getStories();
    this.users = this.users_service.getUsers();
  }

  getUserName(user_id: number) {
    return this.users[user_id-1].name;
  }

  getUserProfileImage(user_id: number) {
    return this.users[user_id-1].profile_image;
  }
}
