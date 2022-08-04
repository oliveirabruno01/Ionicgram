import { Component } from '@angular/core';
import { PostService } from '../api/post/post.service';
import { StoryService } from '../api/story/story.service';
import { SuggestionService } from '../api/suggestion/suggestion.service';
import { UserService } from '../api/user/user.service';
import { Post } from '../types/Post';
import { Suggestion } from '../types/Suggestion';
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
  public suggestions: Array<Suggestion> = [];
  
  constructor(
    private posts_service: PostService, 
    private storie_service: StoryService,
    private users_service: UserService,
    private suggestion_service: SuggestionService,
    ) {}

  onInit() {
  }

  ionViewDidEnter() {
    this.posts = this.posts_service.getPosts();
    this.stories = this.storie_service.getStories();
    this.users = this.users_service.getUsers();
    this.suggestions = this.suggestion_service.getSuggestions();
  }

  getUserName(user_id: number) {
    return this.users[user_id-1].name;
  }

  getUserProfileImage(user_id: number) {
    return this.users[user_id-1].profile_image;
  }
}
