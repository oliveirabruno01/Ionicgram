import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageRoutingModule } from './activity-routing.module';

import { ActivityPage } from './activity.page';
import { ActivityCardModule } from '../activity-card/activity-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPageRoutingModule,
    ActivityCardModule,
    RouterModule
  ],
  declarations: [ActivityPage]
})
export class ActivityPageModule {}
