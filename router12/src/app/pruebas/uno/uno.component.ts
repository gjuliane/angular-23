import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
  currentOutlet = 'primary';
  constructor(
    private routerOutlet: RouterOutlet,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("routerOutlet:",this.routerOutlet.activatedRoute.outlet);
    this.currentOutlet = this.routerOutlet.activatedRoute.outlet;
  }

  goToHeroList = () => {
    this.router.navigate([{ outlets: { [this.currentOutlet]: ['liga', 'superheroes'] } }], {replaceUrl: true});
  }

}
