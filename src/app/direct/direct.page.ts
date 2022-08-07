import { Component } from '@angular/core';
import { UserService } from '../api/user/user.service';
import { User } from '../types/User';

@Component({
  selector: 'app-direct',
  templateUrl: 'direct.page.html',
  styleUrls: ['direct.page.scss']
})
export class DirectPage {
  users: User[];
  constructor(private user_service: UserService) {}

  ngOnInit() {
    this.users = this.user_service.getUsers();
  }

}
