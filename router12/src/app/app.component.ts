import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {

  title = 'router12';

  outlet1cuad1 = true;
  outlet1cuad2 = true;
  outlet1cuad3 = true;
  outlet1cuad4 = true;
  outlet1Split1 = true;
  outlet1Split2 = true;

  cuadrante2a = true;
  cuadrante2b = true;
  cuadrante3c = true;
  cuadrante3d = true;
  cuadranteDiv = true;
  
  maximize(outlet:string, cuadrante: number) {
    switch (outlet) {
      case 'outlet1':
        switch (cuadrante) {
          case 1:
            this.outlet1cuad1 = true;
            this.outlet1cuad2 = false;
            this.outlet1cuad3 = false;
            this.outlet1cuad4 = false;
            this.outlet1Split1 = true;
            this.outlet1Split2 = false;
            break;
          case 2:
            this.outlet1cuad1 = false;
            this.outlet1cuad2 = true;
            this.outlet1cuad3 = false;
            this.outlet1cuad4 = false;
            this.outlet1Split1 = true;
            this.outlet1Split2 = false;
            break;
          case 3:
            this.outlet1cuad1 = false;
            this.outlet1cuad2 = false;
            this.outlet1cuad3 = true;
            this.outlet1cuad4 = false;
            this.outlet1Split1 = false;
            this.outlet1Split2 = true;
            break;
          case 4:
            this.outlet1cuad1 = false;
            this.outlet1cuad2 = false;
            this.outlet1cuad3 = false;
            this.outlet1cuad4 = true;
            this.outlet1Split1 = false;
            this.outlet1Split2 = true;
            break;
        }
        break;
    }
  }

  minimize(outlet:string) {
    switch (outlet) {
      case 'outlet1':
        this.outlet1cuad1 = true;
        this.outlet1cuad2 = true;
        this.outlet1cuad3 = true;
        this.outlet1cuad4 = true;
        this.outlet1Split1 = true;
        this.outlet1Split2 = true;
        break;
    }
  }

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  onDetach($event: Event) {
    console.log("onDetach", $event);
    
  }
  onAttach($event: Event) {
    console.log("onAttach", $event);
    
  }
  onDeactivate($event: any) {
    console.log("onDeactivate", $event);
    
  }
  onActivate($event: any) {
    console.log("onActivate", $event);
    
  }
  //
  onDetachPopUp($event: Event) {
    console.log("onDetachPopUp", $event);
    
  }
  onAttachPopUp($event: Event) {
    console.log("onAttachPopUp", $event);
    
  }
  onDeactivatePopUp($event: any) {
    console.log("onDeactivatePopUp", $event);
    
  }
  onActivatePopUp($event: any) {
    console.log("onActivatePopUp", $event);
    
  }
  //
  onDetachDetails($event: Event) {
    console.log("onDetachDetails", $event);
    
  }
  onAttachDetails($event: Event) {
    console.log("onAttachDetails", $event);
    
  }
  onDeactivateDetails($event: any) {
    console.log("onDeactivateDetails", $event);
    
  }
  onActivateDetails($event: any) {
    console.log("onActivateDetails", $event);
  }
}
