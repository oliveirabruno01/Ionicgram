import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ActivityCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ActivityCardComponent]
})
export class ActivityCardModule { }
