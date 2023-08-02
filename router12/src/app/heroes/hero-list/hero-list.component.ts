// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router, RouterOutlet, RoutesRecognized } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private routerOutlet: RouterOutlet
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getHeroes();
      })
    );
    // this.router.events.subscribe((event: Event) => {
    //   console.log("HeroListComponent", event); //based on this change class
    // });

    console.log("routerOutlet:",this.routerOutlet);
    
    // this.routerOutlet.activatedRoute activat.subscribe((outletName: string) => {
    //   console.log('The current outlet is:', outletName);
    // });
      
  }


}
