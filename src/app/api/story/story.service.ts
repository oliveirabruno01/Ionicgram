import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storie } from '../../types/Storie';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private API_URL = 'https://raw.githubusercontent.com/oliveirabruno01/Ionicgram/master/fake-server/stories.json';
  
  constructor(private http: HttpClient) { }

  getStories(): Array<Storie> {
    let res = this.http.get<Array<Storie>>(this.API_URL);
    let stories: Array<Storie> = [];

    res.subscribe(response => {
      response.map(storie => {
        let s: Storie = {} as Storie;
        s.id = storie.id;
        s.author_id = storie.author_id;
        s.created_at = storie.created_at;
        s.updated_at = storie.updated_at;
        s.image = storie.image;
        stories.push(s);
      })
    })
    return stories;
  }
}
