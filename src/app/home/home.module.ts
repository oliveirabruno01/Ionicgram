import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { HomePage } from './home.page';
import { PostComponent } from '../post/post.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePage, PostComponent]
})
export class HomePageModule {}
