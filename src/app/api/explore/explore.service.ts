import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExplorePost } from 'src/app/types/ExplorePost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'https://raw.githubusercontent.com/oliveirabruno01/Ionicgram/master/fake-server/posts.json';
  
  constructor(private http: HttpClient) { }

  getPosts(): Array<ExplorePost> {
    let res = this.http.get<Array<ExplorePost>>(this.API_URL);
    let posts: Array<ExplorePost> = [];

    res.subscribe(response => {
      response.map(post => {
        let p: ExplorePost = {} as ExplorePost;
        p.id = post.id;
        p.author_id = post.author_id;
        p.image = post.image;
        posts.push(p);
      })
    })
    return posts;
  }
}
