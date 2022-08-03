import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../types/Post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  private API_URL = 'https://raw.githubusercontent.com/oliveirabruno01/Ionicgram/master/fake-server/';

  constructor(public http: HttpClient) {}

  onInit() {
  }

  ionViewDidEnter() {
    console.log('HomePage onInit');
    this.loadPostsFromServer();
  }

  loadPostsFromServer() {
    let res = this.http.get<Post[]>(this.API_URL + 'posts.json');
    let posts: Post[] = [];

    res.subscribe(_posts => posts = _posts); 
    console.log(posts);
    return posts;
  }
}
