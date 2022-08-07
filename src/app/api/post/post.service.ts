import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/types/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'https://raw.githubusercontent.com/oliveirabruno01/Ionicgram/master/fake-server/posts.json';
  
  constructor(private http: HttpClient) { }

  getPosts() {
    let res = this.http.get<Post[]>(this.API_URL);
    return res;
  }
  
  getNFirstPosts(n: number): Array<Post> {
    let res = this.http.get<Array<Post>>(this.API_URL);
    let posts: Array<Post> = [];

    res.subscribe(response => {
      response.map(post => {
        let p: Post = {} as Post;
        p.id = post.id;
        p.author_id = post.author_id;
        p.created_at = post.created_at;
        p.updated_at = post.updated_at;
        p.image = post.image;
        posts.push(p);
      }).slice(0, n);
    })
    return posts;
  }
}
