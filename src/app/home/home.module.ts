import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { HomePage } from './home.page';
import { PostComponent } from '../post/post.component';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { PostModule } from '../post/post.module';
import { SuggestionCardModule } from '../suggestion-card/suggestion-card.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    SwiperModule,
    HeaderModule,
    NavbarModule,
    PostModule,
    SuggestionCardModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
