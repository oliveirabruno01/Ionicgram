import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionCardComponent } from './suggestion-card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SuggestionCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    SuggestionCardComponent
  ]
})
export class SuggestionCardModule { }
