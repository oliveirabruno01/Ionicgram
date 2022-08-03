import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../types/Post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  private API_URL = 'https://raw.githubusercontent.com/oliveirabruno01/Ionicgram/master/fake-server/db.json';

  constructor(public http: HttpClient) {}

  onInit() {
  }

  ionViewDidEnter() {
    console.log('HomePage onInit');
    console.log(this.loadPostsFromServer());
  }

  loadPostsFromServer() {
    const res = this.http.get<Post[]>(this.API_URL);

    let posts = new Array<Post>();
    res.subscribe(response => 
      {
        response.map(item => {
          let p = new Post();
          p.id = item.id;
          p.text = item.text;
          p.author_id = item.author_id;
          p.created_at = item.created_at;
          p.updated_at = item.updated_at;
          p.image = item.image;
          posts.push(p);
        })
      })
    
    return posts;
  }
}
