import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListDosComponent } from './hero-list-dos/hero-list-dos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // HeroesRoutingModule
    RouterModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroListDosComponent
  ]
})
export class HeroesModule {}