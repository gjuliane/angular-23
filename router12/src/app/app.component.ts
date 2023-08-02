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
