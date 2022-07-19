import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor() {}

  onInit() {
  }

  range(end) {
    return Array(end).map((_, idx) => idx);
  }

}
