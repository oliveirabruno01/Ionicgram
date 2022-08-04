import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../api/user/user.service';
import { Suggestion } from '../types/Suggestion';
import { User } from '../types/User';

@Component({
  selector: 'app-suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.scss'],
})
export class SuggestionCardComponent implements OnInit {
  users: User[];
  @Input() suggestion: Suggestion;
  constructor(private user_service: UserService) { }

  ngOnInit() {
    this.users = this.user_service.getUsers();
  }

  getUserName(user_id: number) {
    return this.users[user_id-1].name;
  }

  getUserProfileImage(user_id: number) {
    return this.users[user_id-1].profile_image;
  }

}
