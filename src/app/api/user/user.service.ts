import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User } from '../../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'https://raw.githubusercontent.com/oliveirabruno01/Ionicgram/master/fake-server/users.json';
  
  constructor(private http: HttpClient) { }

  getUsers(): Array<User> {
    let res = this.http.get<Array<User>>(this.API_URL);
    let users: Array<User> = [];

    res.subscribe(response => {
      response.map(user => {
        let u: User = {} as User;
        u.id = user.id;
        u.name = user.name;
        u.profile_image = user.profile_image;
        u.followers = user.followers;
        u.following = user.following;
        u.bio = user.bio;
        users.push(u);
      })
    })
    return users;
  }

  getUser(id: number): User {
    return this.getUsers().find(user => user.id == id);
  }
}
