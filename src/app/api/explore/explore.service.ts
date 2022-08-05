import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExplorePost } from 'src/app/types/ExplorePost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'https://raw.githubusercontent.com/oliveirabruno01/Ionicgram/master/fake-server/explore.json';
  
  constructor(private http: HttpClient) { }

  getPosts(): Array<ExplorePost> {
    let res = this.http.get<Array<ExplorePost>>(this.API_URL);
    let explore_posts: Array<ExplorePost> = [];

    res.subscribe(response => {
      response.map(explore_post => {
        let p: ExplorePost = {} as ExplorePost;
        p.id = explore_post.id;
        p.author_id = explore_post.author_id;
        p.image = explore_post.image;
        explore_posts.push(p);
      })
    })
    return explore_posts;
  }
}
