import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../api/post/post.service';
import { PostComponent } from '../post/post.component';
import { Post } from '../types/Post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public posts: Array<Post> = [];
  
  constructor(public posts_service: PostService) {}

  onInit() {
  }

  ionViewDidEnter() {
    this.posts = this.posts_service.getPosts();
  }
}
