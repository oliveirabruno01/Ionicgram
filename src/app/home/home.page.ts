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

  visiblePosts: Array<Post>;
  visibleLimit;
  visible = 3;
  visibleAddRate = 3;
  
  constructor(
    private posts_service: PostService, 
    private storie_service: StoryService,
    private users_service: UserService,
    private suggestion_service: SuggestionService,
    ) {}

  onInit() {
  }

  ionViewDidEnter() {
    this.posts_service.getPosts()
      .subscribe(response => {
        this.posts = response;
        this.visiblePosts = response.slice(0,this.visible);
        this.visibleLimit = this.posts.length
      }
    );

    this.stories = this.storie_service.getStories();
    this.users = this.users_service.getUsers();
    this.suggestions = this.suggestion_service.getSuggestions();

  }

  getUserName(user_id: number) {
    return this.users[user_id-1]?.name;
  }

  getUserProfileImage(user_id: number) {
    return this.users[user_id-1]?.profile_image;
  }

  getNFirstPosts(isFirstLoad, event) {
    this.posts_service.getPosts()
    .subscribe(response => {
      (async () => { 
        await new Promise(f => setTimeout(f, 1000));
        this.visiblePosts = [... this.visiblePosts, ...response.slice(this.visible, this.visible+this.visibleAddRate)];
        if (isFirstLoad) event.target.complete();

        if (this.visible + 3 < this.visibleLimit) {
          this.visible += this.visibleAddRate;
        } else {
          this.visible = this.visibleLimit;
          event.target.disabled = true;
        }
      })();
    }, error => {
      console.log(error);
    });
  }

  doInfinite(event) {
    this.getNFirstPosts(true, event);
  }
}
