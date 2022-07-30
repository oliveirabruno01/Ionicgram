import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {
  images: String[] = ['../../assets/image.jpg'];

  constructor() {}
}
