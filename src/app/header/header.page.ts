import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.page.html',
  styleUrls: ['header.page.scss']
})
export class HeaderPage {
  constructor(private router: Router) {}

  getPath() {
    return this.router.url.split('/')[2]
  }

}
