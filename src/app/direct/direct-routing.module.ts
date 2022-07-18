import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectPage } from './direct.page';

const routes: Routes = [
  {
    path: '',
    component: DirectPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectPageRoutingModule {}
