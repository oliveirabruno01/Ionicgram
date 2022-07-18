import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectPage } from './direct.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DirectPageRoutingModule } from './direct-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DirectPageRoutingModule
  ],
  declarations: [DirectPage]
})
export class DirectPageModule {}
