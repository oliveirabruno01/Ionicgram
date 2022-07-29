import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectPage } from './direct.page';

const routes: Routes = [
  {
    path: '',
    component: DirectPage,
  },
  {
    path: 't/:id',
    loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectPageRoutingModule {}
