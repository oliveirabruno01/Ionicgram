import { Component } from '@angular/core';
import { ExploreService } from '../api/explore/explore.service';
import { ExplorePost } from '../types/ExplorePost';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {
  images: String[] = ['../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg', '../../assets/image.jpg'];
  posts: Array<ExplorePost>;

  constructor(private explore_service: ExploreService) {}

  ngOnInit() {
    this.posts = this.getExplorePosts();
  }

  getExplorePosts(): Array<ExplorePost> {
    return this.explore_service.getExplorePosts();
  }
}
