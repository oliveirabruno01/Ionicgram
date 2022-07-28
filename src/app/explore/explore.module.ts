import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExplorePage } from './explore.page';

import { ExplorePageRoutingModule } from './explore-routing.module';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ExplorePage }]),
    ExplorePageRoutingModule,
    HeaderModule,
    NavbarModule
  ],
  declarations: [ExplorePage]
})
export class ExplorePageModule {}
