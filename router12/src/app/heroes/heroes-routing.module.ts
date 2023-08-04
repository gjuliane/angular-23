import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  {
    path: 'liga',
    children: [
      // { path: 'heroes', redirectTo: 'superheroes', pathMatch: 'full' },
      // { path: 'hero/:id', redirectTo: 'superhero/:id'},
      { path: 'superheroes',  component: HeroListComponent, outlet: 'popup'},
      { path: 'superhero/:id', component: HeroDetailComponent, outlet: 'popup'},
      { path: 'superheroes',  component: HeroListComponent, outlet: 'detalles'},
      { path: 'superhero/:id', component: HeroDetailComponent, outlet: 'detalles'},
      { path: 'superheroes',  component: HeroListComponent},
      { path: 'superhero/:id', component: HeroDetailComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }