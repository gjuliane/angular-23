import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const routes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'detalles'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'liga',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
  },
  {
    path: 'liga',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    outlet:'detalles'
  },
  {
    path: 'liga',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    outlet:'popup'
  },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
