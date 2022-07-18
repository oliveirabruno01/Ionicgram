import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderPageRoutingModule } from './header-routing.module';

import { HeaderPage } from './header.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderPageRoutingModule
  ],
  declarations: [HeaderPage]
})
export class HeaderPageModule {}
