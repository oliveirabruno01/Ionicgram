import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ActivityCardModule } from '../activity-card/activity-card.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ActivityCardModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
