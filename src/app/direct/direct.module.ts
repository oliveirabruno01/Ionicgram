import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectPage } from './direct.page';

import { DirectPageRoutingModule } from './direct-routing.module';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DirectPageRoutingModule,
    HeaderModule,
    NavbarModule,
    SwiperModule
  ],
  declarations: [DirectPage]
})
export class DirectPageModule {}
