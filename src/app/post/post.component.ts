import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../api/post/post.service';
import { UserService } from '../api/user/user.service';
import { Post } from '../types/Post';
import { User } from '../types/User';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  users: User[];
  @Input() post: Post;
  constructor(private user_service: UserService) { }

  ngOnInit() {
    this.users = this.user_service.getUsers();
  }

  getUserName(): string {
    return this.users[this.post.author_id-1]?.name
  }

  getUserProfileImage(): string {
    return this.users[this.post.author_id-1]?.profile_image;
  }
}
