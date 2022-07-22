import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderPage } from './header.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'direct',
        loadChildren: () => import('../direct/direct.module').then(m => m.DirectPageModule)
      },
      {
        path: 'explore',
        loadChildren: () => import('../explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HeaderPageRoutingModule {}
