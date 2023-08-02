import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListDosComponent } from './hero-list-dos/hero-list-dos.component';

const heroesRoutes: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'hero/:id', redirectTo: '/superhero/:id' },
  // { path: 'otralista', component: HeroListDosComponent, outlet: 'detalles' },
  { path: 'superheroes',  component: HeroListComponent },
  { path: 'superheroes',  component: HeroListComponent, outlet: 'popup'},
  { path: 'superheroes',  component: HeroListComponent, outlet: 'detalles'},
  { path: 'superhero/:id', component: HeroDetailComponent},
  { path: 'superhero/:id', component: HeroDetailComponent, outlet: 'popup'},
  { path: 'superhero/:id', component: HeroDetailComponent, outlet: 'detalles'},
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